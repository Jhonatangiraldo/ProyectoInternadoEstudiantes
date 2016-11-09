-- MySQL Administrator dump 1.4
--
-- ------------------------------------------------------
-- Server version	5.1.28-rc-community


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


--
-- Create schema internado
--

CREATE DATABASE IF NOT EXISTS internado;
USE internado;

--
-- Definition of table `permiso`
--

DROP TABLE IF EXISTS `permiso`;
CREATE TABLE `permiso` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nombrePersona` varchar(45) NOT NULL,
  `fecha` varchar(45) DEFAULT NULL,
  `horaSalida` varchar(45) NOT NULL,
  `horaLlegada` varchar(45) NOT NULL,
  `motivo` varchar(45) DEFAULT NULL,
  `estado` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `permiso`
--

/*!40000 ALTER TABLE `permiso` DISABLE KEYS */;
INSERT INTO `permiso` (`id`,`nombrePersona`,`fecha`,`horaSalida`,`horaLlegada`,`motivo`,`estado`) VALUES 
 (1,'JUANO','2016-12-31','23:59','12:59','MOTIVO','0'),
 (2,'JUANO','2016-12-31','23:59','12:59','MOTIVO','0'),
 (3,'lkñjkljñ','jlkñklj','kjlñ','ñkjl','kñlj','1');
/*!40000 ALTER TABLE `permiso` ENABLE KEYS */;


--
-- Definition of table `roles`
--

DROP TABLE IF EXISTS `roles`;
CREATE TABLE `roles` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `rol` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `roles`
--

/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` (`id`,`rol`) VALUES 
 (1,'Administrador'),
 (2,'Estudiante');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;


--
-- Definition of table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
CREATE TABLE `usuario` (
  `usuario` varchar(45) NOT NULL DEFAULT '',
  `password` varchar(45) NOT NULL,
  `rol` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `usuario`
--

/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` (`usuario`,`password`,`rol`) VALUES 
 ('felipe','1234','1'),
 ('jhonatan','1234','2');
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;




/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
