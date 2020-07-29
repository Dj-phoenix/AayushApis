-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jul 29, 2020 at 07:57 AM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `aayush`
--

-- --------------------------------------------------------

--
-- Table structure for table `aayush_users`
--

CREATE TABLE `aayush_users` (
  `id` int(100) NOT NULL,
  `full_name` varchar(50) NOT NULL,
  `username` varchar(400) DEFAULT NULL,
  `lastname` varchar(300) DEFAULT NULL,
  `password` varchar(400) NOT NULL,
  `email` varchar(400) NOT NULL,
  `age` varchar(20) DEFAULT NULL,
  `address` text DEFAULT NULL,
  `state` varchar(400) DEFAULT NULL,
  `country` varchar(400) DEFAULT NULL,
  `pincode` varchar(400) DEFAULT NULL,
  `phoneno` varchar(400) DEFAULT NULL,
  `childhood` varchar(400) DEFAULT NULL,
  `interest` varchar(400) DEFAULT NULL,
  `designation` varchar(400) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `about_you` text DEFAULT NULL,
  `date` datetime NOT NULL DEFAULT current_timestamp(),
  `register_date` varchar(400) DEFAULT NULL,
  `ip` varchar(400) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `alert_noti` int(1) DEFAULT NULL,
  `profile_img` varchar(50) DEFAULT NULL,
  `mobile_verified` varchar(1) NOT NULL DEFAULT '0',
  `user_active` int(1) NOT NULL DEFAULT 0,
  `mobile_otp` int(6) NOT NULL,
  `resetPasswordExpires` timestamp NOT NULL DEFAULT current_timestamp(),
  `resetPasswordToken` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
