-- MySQL dump 10.13  Distrib 5.7.9, for osx10.9 (x86_64)
--
-- Host: localhost    Database: spenders
-- ------------------------------------------------------
-- Server version	5.7.9

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
-- Table structure for table `t_spenders`
--

DROP TABLE IF EXISTS `t_spenders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_spenders` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `GROUP_ID` int(11) DEFAULT '1',
  `NAME` varchar(60) COLLATE utf8_unicode_ci NOT NULL,
  `GROUP_NAME` varchar(60) COLLATE utf8_unicode_ci DEFAULT 'default',
  `NOTE` varchar(200) COLLATE utf8_unicode_ci DEFAULT '',
  `ICON` varchar(45) CHARACTER SET utf8 NOT NULL DEFAULT 'default',
  `SPEND` int(11) DEFAULT '0',
  `PL_SPEND` int(11) DEFAULT '0',
  `CR_MONTH` varchar(2) CHARACTER SET utf8 NOT NULL,
  `ACTIVE` varchar(1) CHARACTER SET utf8 DEFAULT 'T',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=73 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_spenders`
--

LOCK TABLES `t_spenders` WRITE;
/*!40000 ALTER TABLE `t_spenders` DISABLE KEYS */;
INSERT INTO `t_spenders` VALUES (64,1,'Products','default','','ic-browse',882,800,'5','T'),(65,1,'Movies','default','','ic-youtubeIcon',1275,500,'5','T'),(66,1,'Security','default','','ic-nodeLocked',500,1500,'5','T'),(67,1,'Flat rent','default','','ic-httpsIcon',6358,6500,'5','T'),(68,1,'Himself','default','','ic-reset',875,1000,'5','T'),(69,1,'Fixit','default','','ic-preferences',805,500,'5','T'),(70,1,'Chak','default','','ic-edit',70,100,'5','T'),(71,1,' Equipment','default','','ic-print',0,2000,'5','T'),(72,1,'Other','default','','ic-reload',300,1000,'5','T');
/*!40000 ALTER TABLE `t_spenders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_wallets`
--

DROP TABLE IF EXISTS `t_wallets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_wallets` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `NAME` varchar(120) COLLATE utf8_unicode_ci NOT NULL,
  `BALANCE` int(11) DEFAULT '0',
  `TYPE` varchar(45) CHARACTER SET utf8 NOT NULL,
  `IS_NEGATIVE` varchar(1) CHARACTER SET utf8 DEFAULT 'F',
  `ICON` varchar(45) COLLATE utf8_unicode_ci NOT NULL DEFAULT 'ic-add',
  `ACTIVE` varchar(1) COLLATE utf8_unicode_ci DEFAULT 'T',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_wallets`
--

LOCK TABLES `t_wallets` WRITE;
/*!40000 ALTER TABLE `t_wallets` DISABLE KEYS */;
INSERT INTO `t_wallets` VALUES (4,'Ccard',50,'$','F','ic-purge','T'),(5,'Wallet',1169,'$','F','ic-edit','T'),(31,'test',800,'$','T','ic-nodeLocked','T');
/*!40000 ALTER TABLE `t_wallets` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2016-06-18 23:32:03
