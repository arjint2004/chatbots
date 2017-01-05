-- phpMyAdmin SQL Dump
-- version 4.0.10deb1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jan 05, 2017 at 11:54 AM
-- Server version: 5.5.53-0ubuntu0.14.04.1
-- PHP Version: 5.5.9-1ubuntu4.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `chatbot`
--

-- --------------------------------------------------------

--
-- Table structure for table `conversation`
--

CREATE TABLE IF NOT EXISTS `conversation` (
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
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `conversation`
--

INSERT INTO `conversation` (`id`, `sender`, `receipent`, `date`, `message`, `event_json`, `watermark`, `is_echo`, `seq`, `app_id`, `mid`, `payload`, `posisi`) VALUES
(1, '1148993331882805', '1673637882907948', '1483616271800', '', '', '', '', '', '', '', 'order_now', 'receivedPostback'),
(2, '1148993331882805', '1673637882907948', '1483616286698', '', '', '', '', '', '', '', 'order_acg', 'receivedPostback'),
(3, '1148993331882805', '1673637882907948', '1483616405775', '5', '{"sender":{"id":"1148993331882805"},"recipient":{"id":"1673637882907948"},"timestamp":1483616405775,"message":{"mid":"mid.1483616405775:01ca882c31","seq":119553,"text":"5"}}', 'undefined', '', '119553', 'undefined', 'mid.1483616405775:01ca882', '', 'receivedMessage'),
(4, '1148993331882805', '1673637882907948', '1483616479019', '', '', '', '', '', '', '', 'order_now', 'receivedPostback');
