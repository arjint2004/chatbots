-- MySQL dump 10.13  Distrib 5.5.53, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: chatbot
-- ------------------------------------------------------
-- Server version	5.5.53-0ubuntu0.14.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `conversation`
--

DROP TABLE IF EXISTS `conversation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `conversation` (
  `id` int(12) NOT NULL AUTO_INCREMENT,
  `sender` varchar(50) NOT NULL,
  `receipent` varchar(50) NOT NULL,
  `date` varchar(25) NOT NULL,
  `message` text NOT NULL,
  `event_json` text NOT NULL,
  `watermark` varchar(25) NOT NULL,
  `is_echo` enum('true','false') NOT NULL,
  `seq` varchar(25) NOT NULL,
  `app_id` varchar(50) NOT NULL,
  `mid` varchar(25) NOT NULL,
  `payload` varchar(50) NOT NULL,
  `posisi` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `conversation`
--

LOCK TABLES `conversation` WRITE;
/*!40000 ALTER TABLE `conversation` DISABLE KEYS */;
INSERT INTO `conversation` VALUES (1,'1148993331882805','1673637882907948','1483693835001','gret','{\"sender\":{\"id\":\"1148993331882805\"},\"recipient\":{\"id\":\"1673637882907948\"},\"timestamp\":1483693835001,\"message\":{\"mid\":\"mid.1483693835001:b5126e3a24\",\"seq\":119737,\"text\":\"gret\"}}','undefined','','119737','undefined','mid.1483693835001:b5126e3','','receivedMessage'),(2,'1148993331882805','1673637882907948','1484289106087','','','','','','','','order_now','receivedPostback'),(3,'1148993331882805','1673637882907948','1484636890345','tes','{\"sender\":{\"id\":\"1148993331882805\"},\"recipient\":{\"id\":\"1673637882907948\"},\"timestamp\":1484636890345,\"message\":{\"mid\":\"mid.1484636890345:3c3bf00a64\",\"seq\":122485,\"text\":\"tes\"}}','undefined','','122485','undefined','mid.1484636890345:3c3bf00','','receivedMessage');
/*!40000 ALTER TABLE `conversation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `conversations`
--

DROP TABLE IF EXISTS `conversations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `conversations` (
  `id` int(12) NOT NULL AUTO_INCREMENT,
  `sender` varchar(50) NOT NULL,
  `receipent` varchar(50) NOT NULL,
  `date` varchar(25) NOT NULL,
  `message` text NOT NULL,
  `speak` enum('bot','cust') NOT NULL,
  `topik` enum('order','consult') NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `conversations`
--

LOCK TABLES `conversations` WRITE;
/*!40000 ALTER TABLE `conversations` DISABLE KEYS */;
/*!40000 ALTER TABLE `conversations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cookie`
--

DROP TABLE IF EXISTS `cookie`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cookie` (
  `id` int(50) NOT NULL DEFAULT '0',
  `sender` varchar(50) NOT NULL,
  `receipent` varchar(50) NOT NULL,
  `value` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cookie`
--

LOCK TABLES `cookie` WRITE;
/*!40000 ALTER TABLE `cookie` DISABLE KEYS */;
INSERT INTO `cookie` VALUES (0,'','','');
/*!40000 ALTER TABLE `cookie` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `percakapan`
--

DROP TABLE IF EXISTS `percakapan`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `percakapan` (
  `id` int(12) NOT NULL AUTO_INCREMENT,
  `sender` varchar(50) NOT NULL,
  `receipent` varchar(50) NOT NULL,
  `date` varchar(25) NOT NULL,
  `message` text NOT NULL,
  `speak` enum('bot','cust') NOT NULL,
  `event` text NOT NULL,
  `watermark` varchar(100) NOT NULL,
  `payload` varchar(50) NOT NULL,
  `session` int(5) NOT NULL,
  `step` int(5) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `percakapan`
--

LOCK TABLES `percakapan` WRITE;
/*!40000 ALTER TABLE `percakapan` DISABLE KEYS */;
INSERT INTO `percakapan` VALUES (1,'1148993331882805','1673637882907948','1485942181942','Anda akan memulai konsultasi online. Jawab pertanyaan dengan benar dan sesuai kondisi anda. Untuk hasil yang baik \n \n 1. Siapa nama lengkap anda ?','bot','{\"recipient\":{\"id\":\"1673637882907948\"},\"timestamp\":1485942181942,\"sender\":{\"id\":\"1148993331882805\"},\"postback\":{\"payload\":\"konsultasi\"}}','','konsultasi',1,1);
/*!40000 ALTER TABLE `percakapan` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-02-01  9:45:08
