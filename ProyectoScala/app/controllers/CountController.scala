package controllers

import javax.inject._
import play.api._
import play.api.mvc._


import play.api.libs.json._
import scala.collection.mutable.ListBuffer
import play.api.db._



/**
 * This controller demonstrates how to use dependency injection to
 * bind a component into a controller class. The class creates an
 * `Action` that shows an incrementing count to users. The [[Counter]]
 * object is injected by the Guice dependency injection system.
 */
@Singleton
class CountController @Inject() (db: Database) extends Controller {

  case class Usuario(var usuario:String, var password: String, var rol: String )
  implicit val placesWrites = Json.format[Usuario]

  def autorizados = Action {
    val conn = db.getConnection()
    var usuarios = new ListBuffer[Usuario]()

    try {
        val stmt = conn.createStatement
        //stmt.executeUpdate("INSERT INTO chat_users VALUES ('giraldo', last_activity+last_activity)");
        val rs = stmt.executeQuery("SELECT * FROM usuario ")

        while (rs.next()) {
          usuarios += new Usuario(rs.getString("usuario"), rs.getString("password"), rs.getString("rol"))
        }
    } finally {
          conn.close()
      }
       Ok(Json.toJson(usuarios))
  }

  def peticion(nombre:String, fechaSalida:String, horaSalida:String, horaLlegada:String, motivo:String) =
  Action {
    val conn = db.getConnection()
    try {
          val stmt = conn.createStatement
          stmt.executeUpdate("INSERT INTO permiso VALUES (ID+ID, '"+nombre+"','"+fechaSalida+"', '"+horaSalida+"', '"+
                             horaLlegada+"', '"+motivo+"', '0') ");
    } finally {
          conn.close()
    }
         Ok(Json.toJson(new Usuario("Ok", "Ok", "Ok")))
    }

  def registro(user:String, pass:String, rol:String) = Action {
    val conn = db.getConnection()
    try {
          val stmt = conn.createStatement
          stmt.executeUpdate("INSERT INTO usuario VALUES ('"+user+"','"+pass+"', '"+rol+"')");
    } finally {
          conn.close()
      }
       Ok(Json.toJson(new Usuario("Ok", "Ok", "Ok")))
  }

  def login(user:String, pass:String) = Action {
    val conn = db.getConnection()
    var usuario:Usuario = new Usuario("0","0","0")

  try {
        val stmt = conn.createStatement
        //stmt.executeUpdate("INSERT INTO chat_users VALUES ('giraldo', last_activity+last_activity)");
        val rs = stmt.executeQuery("SELECT * FROM usuario WHERE usuario = '"+user+"' and "+
                                       " password = '"+pass+"' ")
        if (!rs.next()){
            usuario = new Usuario("null","null", "0")
        }else{
          usuario = new Usuario(rs.getString("usuario"), rs.getString("password"), rs.getString("rol"))
        }
  } finally {
        conn.close()
    }
     Ok(Json.toJson(usuario))
  }
}
