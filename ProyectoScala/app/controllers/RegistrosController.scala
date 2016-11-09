package controllers

import javax.inject._
import play.api._
import play.api.mvc._
import play.api.libs.json._
import scala.collection.mutable.ListBuffer

import play.api.db._



@Singleton
class RegistrosController @Inject() (db: Database) extends Controller {

  case class Permiso(var id:Int, var nombrePersona:String, var fecha: String, var horaSalida: String,
                     var horaLlegada:String, var motivo:String, var estado:String)
  implicit val placesWrites = Json.format[Permiso]

  def permisoTodos = Action {
    val conn = db.getConnection()
    var usuarios = new ListBuffer[Permiso]()

  try {
        val stmt = conn.createStatement
        val rs = stmt.executeQuery("SELECT * FROM permiso ")
        while (rs.next()) {
          usuarios += new Permiso(rs.getInt("id"), rs.getString("nombrePersona"), rs.getString("fecha"), rs.getString("horaSalida"),
                                  rs.getString("horaLlegada"), rs.getString("motivo"), rs.getString("estado"))
        }
    } finally {
        conn.close()
    }
     Ok(Json.toJson(usuarios))
  }

  def permisoAprobado = Action {
    val conn = db.getConnection()
    var usuarios = new ListBuffer[Permiso]()

  try {
        val stmt = conn.createStatement
        val rs = stmt.executeQuery("SELECT * FROM permiso WHERE estado = '1' ")
        while (rs.next()) {
          usuarios += new Permiso(rs.getInt("id"), rs.getString("nombrePersona"), rs.getString("fecha"), rs.getString("horaSalida"),
                                  rs.getString("horaLlegada"), rs.getString("motivo"), rs.getString("estado"))
        }
    } finally {
        conn.close()
    }
     Ok(Json.toJson(usuarios))
  }

  def permisoNoAprobado = Action {
    val conn = db.getConnection()
    var usuarios = new ListBuffer[Permiso]()

  try {
        val stmt = conn.createStatement
        val rs = stmt.executeQuery("SELECT * FROM permiso WHERE estado = '0' ")
        while (rs.next()) {
          usuarios += new Permiso(rs.getInt("id"), rs.getString("nombrePersona"), rs.getString("fecha"), rs.getString("horaSalida"),
                                  rs.getString("horaLlegada"), rs.getString("motivo"), rs.getString("estado"))
        }
    } finally {
        conn.close()
    }
     Ok(Json.toJson(usuarios))
  }

  def individual(id: String) = Action {
    val conn = db.getConnection()
    var permiso:Permiso = new Permiso(0,"0","0","0","0","0","0")

  try {
        val stmt = conn.createStatement
        val rs = stmt.executeQuery("SELECT * FROM permiso WHERE id = '"+id.toInt+"' ")
        rs.next()
        permiso = new Permiso(rs.getInt("id"), rs.getString("nombrePersona"), rs.getString("fecha"), rs.getString("horaSalida"),
                                  rs.getString("horaLlegada"), rs.getString("motivo"), rs.getString("estado"))
    } finally {
        conn.close()
    }
     Ok(Json.toJson(permiso))
  }

  def aprobar(id: String) = Action {
    val conn = db.getConnection()
    var permiso:Permiso = new Permiso(0,"0","0","0","0","0","0")

  try {
        val stmt = conn.createStatement
        stmt.executeUpdate("UPDATE permiso SET estado = '1' WHERE id = '"+id.toInt+"'");
    } finally {
        conn.close()
    }
     Ok(Json.toJson(new Permiso(0,"Ok","Ok","Ok","Ok","Ok","Ok")))
  }




}
