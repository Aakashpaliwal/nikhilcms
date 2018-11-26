-- phpMyAdmin SQL Dump
-- version 4.8.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 14, 2018 at 06:20 AM
-- Server version: 10.1.34-MariaDB
-- PHP Version: 5.6.37

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `niksms`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `admin_id` int(9) NOT NULL,
  `status` int(1) NOT NULL DEFAULT '1',
  `full_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `date_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `createdby` int(9) NOT NULL DEFAULT '0',
  `adminname` varchar(255) NOT NULL,
  `password` varchar(500) NOT NULL,
  `password_token` varchar(500) NOT NULL,
  `token_time` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `admin_ip` varchar(255) NOT NULL,
  `mydp` varchar(250) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`admin_id`, `status`, `full_name`, `email`, `date_time`, `createdby`, `adminname`, `password`, `password_token`, `token_time`, `admin_ip`, `mydp`) VALUES
(1, 1, 'parag', 'aakashpaliwal@gmail.com', '2018-09-04 08:05:26', 1, 'aakash', 'e7b0ab597644579afe2bd0c5194a76f707b2bcbf2015c6abbbbc65cfa2dfe73e', '', '0000-00-00 00:00:00', '', ''),
(2, 0, 'paragdineshgupta', 'aakash@gmail.com', '2018-09-21 06:54:36', 0, 'gupta', '46011b5aab12a95bc104e3c7abc184e2d9e0bc7994159ef9b337d781db97cce0', '', '0000-00-00 00:00:00', '', 'parag.jpg'),
(3, 1, 'parag', '', '2018-09-22 10:00:13', 2, 'divana', '85b2ab7fc2fa0ab39c66c05eadffbad5cd3d47a6cdc761ad41b7cb84b9a4b251', '', '0000-00-00 00:00:00', '', ''),
(4, 0, 'harold', '', '2018-10-24 11:28:25', 1, 'harold404', '46011b5aab12a95bc104e3c7abc184e2d9e0bc7994159ef9b337d781db97cce0', '', '0000-00-00 00:00:00', '', ''),
(5, 0, 'john doe', '', '2018-10-24 16:46:46', 1, 'john222', '2c84d2f42531a8305ce8a746941758d4c92387c49367f4ada1cb57654fe8209f', '', '0000-00-00 00:00:00', '', ''),
(6, 1, 'root', 'aakashpaliwal95@gmail.com', '2018-10-25 05:26:12', 1, '', '7933c1fad5d408559ee9cb83f2fcaab69f9c99b51af603c5255f8311f2902268', '', '0000-00-00 00:00:00', '', ''),
(7, 0, 'jane test', '', '2018-10-25 05:26:24', 1, 'jane2222', '0f7259d6e57ddf061913a9e271a8577b94d56ed93aa0700468e4f6b977150589', '', '0000-00-00 00:00:00', '', ''),
(8, 1, 'parag', 'parag@gmail.com', '2018-10-25 05:27:09', 1, '', '46011b5aab12a95bc104e3c7abc184e2d9e0bc7994159ef9b337d781db97cce0', '', '0000-00-00 00:00:00', '', ''),
(9, 1, 'rohit', '', '2018-10-30 05:31:12', 1, '', '46011b5aab12a95bc104e3c7abc184e2d9e0bc7994159ef9b337d781db97cce0', '', '0000-00-00 00:00:00', '', ''),
(10, 1, 'albert', 'alberte45@gmail.com', '2018-11-02 11:11:53', 1, 'albert23', '46011b5aab12a95bc104e3c7abc184e2d9e0bc7994159ef9b337d781db97cce0', '', '0000-00-00 00:00:00', '', ''),
(11, 0, 'test john ', 'testjohn@gmail.com', '2018-11-03 12:41:24', 1, 'test jogn23', 'e7b0ab597644579afe2bd0c5194a76f707b2bcbf2015c6abbbbc65cfa2dfe73e', '', '0000-00-00 00:00:00', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `amc`
--

CREATE TABLE `amc` (
  `amc_id` int(11) NOT NULL,
  `site_id` int(11) NOT NULL,
  `createdby` int(11) NOT NULL,
  `status` int(1) NOT NULL DEFAULT '1',
  `total_price` int(11) NOT NULL,
  `startDate` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `amc`
--

INSERT INTO `amc` (`amc_id`, `site_id`, `createdby`, `status`, `total_price`, `startDate`) VALUES
(1, 5, 1, 0, 25600, '2018-06-05'),
(2, 5, 1, 1, 2560000, '2018-06-05'),
(3, 5, 1, 1, 58000, '2018-06-08'),
(4, 5, 1, 1, 65801000, '2018-06-06');

-- --------------------------------------------------------

--
-- Table structure for table `amc_equip`
--

CREATE TABLE `amc_equip` (
  `amc_equip_id` int(11) NOT NULL,
  `equipment_id` int(11) NOT NULL,
  `frequency` int(11) NOT NULL COMMENT '3,6,12',
  `price` int(11) NOT NULL,
  `nextDate` date NOT NULL,
  `amc_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `amc_equip`
--

INSERT INTO `amc_equip` (`amc_equip_id`, `equipment_id`, `frequency`, `price`, `nextDate`, `amc_id`) VALUES
(1, 3, 3, 25600, '2018-09-05', 1),
(2, 3, 6, 256000, '2018-12-05', 2),
(3, 3, 12, 5800, '2019-06-08', 3),
(4, 3, 4, 658000, '2018-10-06', 4);

-- --------------------------------------------------------

--
-- Table structure for table `amc_service`
--

CREATE TABLE `amc_service` (
  `amc_service_id` int(11) NOT NULL,
  `amc_equip_id` int(11) NOT NULL,
  `assignto` int(11) NOT NULL COMMENT 'assignto/doneby',
  `dos` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `state` int(11) NOT NULL DEFAULT '1' COMMENT 'in progress 3,serviced 2,not serviced 1',
  `log` text COMMENT 'report',
  `status` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `amc_service`
--

INSERT INTO `amc_service` (`amc_service_id`, `amc_equip_id`, `assignto`, `dos`, `state`, `log`, `status`) VALUES
(2, 7, 2, '2018-10-27 12:25:11', 2, 'jldi krna he', 0),
(3, 7, 2, '2018-10-27 12:38:36', 1, 'second time', 0),
(4, 3, 11, '2018-11-01 13:37:34', 1, NULL, 0),
(5, 4, 11, '2018-11-03 08:35:18', 2, NULL, 0);

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `category_id` int(11) NOT NULL,
  `category_name` varchar(100) NOT NULL,
  `status` int(11) NOT NULL DEFAULT '1'
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`category_id`, `category_name`, `status`) VALUES
(1, 'Tv', 1),
(2, 'AC', 1),
(3, 'CUSTOME-EQUIP-CATEGORY', 1),
(4, 'NEW TEST CATEGORY EQUIPMENT', 1);

-- --------------------------------------------------------

--
-- Table structure for table `complaint`
--

CREATE TABLE `complaint` (
  `complaint_id` int(11) NOT NULL,
  `description` text NOT NULL,
  `doc` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `state` int(11) NOT NULL DEFAULT '0' COMMENT '1 for new/pending',
  `createdby` int(11) NOT NULL COMMENT 'admin_id',
  `assignto` int(11) NOT NULL COMMENT 'employ_id/supervisor',
  `log` text NOT NULL,
  `status` int(1) NOT NULL DEFAULT '1',
  `site_id` int(11) NOT NULL COMMENT 'fk'
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `complaint`
--

INSERT INTO `complaint` (`complaint_id`, `description`, `doc`, `state`, `createdby`, `assignto`, `log`, `status`, `site_id`) VALUES
(1, 'test2', '0000-00-00 00:00:00', 1, 1, 10, 'test-logs', 0, 2),
(2, 'test test', '2018-10-16 02:25:24', 1, 1, 0, '', 1, 1),
(3, 'equipment malfunctinoning', '2018-11-01 07:42:07', 1, 1, 0, '', 1, 5),
(4, 'test descripiton!!', '2018-11-01 07:49:57', 1, 1, 0, '', 1, 5);

-- --------------------------------------------------------

--
-- Table structure for table `complaint_type`
--

CREATE TABLE `complaint_type` (
  `complaint_type_id` int(11) NOT NULL,
  `complaint_type_name` varchar(255) NOT NULL,
  `status` int(11) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `complaint_type`
--

INSERT INTO `complaint_type` (`complaint_type_id`, `complaint_type_name`, `status`) VALUES
(1, 'COMPLAINT-TYPE-NAME=TEST', 1);

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

CREATE TABLE `customer` (
  `customer_id` int(11) NOT NULL,
  `customer_name` varchar(100) NOT NULL,
  `spoc` varchar(100) DEFAULT NULL,
  `email` varchar(100) NOT NULL,
  `mobile` varchar(13) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `status` int(1) NOT NULL DEFAULT '1'
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `customer`
--

INSERT INTO `customer` (`customer_id`, `customer_name`, `spoc`, `email`, `mobile`, `address`, `status`) VALUES
(1, 'test2', 'alpha', '2001@gmi.in', '1234567890', 'hello', 0),
(2, 'TATA', NULL, 'taaata@gammil.com', NULL, NULL, 0),
(3, 'BIRLA', 'spocccc', 'ta@gammil.com', '8764049587', NULL, 1),
(4, 'IBM', 'rada', 'taaata@gammil.com', NULL, NULL, 0),
(5, 'NEW JANE TEST', 'spoc jane', 'janetest34@gmail.com', '9562387420', '212, ny street', 1),
(6, 'JOHN DOE NOW', 'spoc', 'johndoe404@gmail.com', '56892312478', NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `customer_type`
--

CREATE TABLE `customer_type` (
  `customer_type_id` int(11) NOT NULL,
  `customer_type_name` varchar(255) NOT NULL,
  `status` int(11) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `customer_type`
--

INSERT INTO `customer_type` (`customer_type_id`, `customer_type_name`, `status`) VALUES
(1, 'CUSTOME-CUSTOMER-CATEGIRY', 1);

-- --------------------------------------------------------

--
-- Table structure for table `employe`
--

CREATE TABLE `employe` (
  `employe_id` int(11) NOT NULL,
  `employe_name` varchar(100) NOT NULL,
  `alias` varchar(100) DEFAULT NULL COMMENT 'other name for removing conflict',
  `email` varchar(100) NOT NULL,
  `mobile` varchar(13) NOT NULL,
  `position` int(1) NOT NULL,
  `createdby` int(11) NOT NULL COMMENT 'fk adminid',
  `employename` varchar(100) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `status` int(1) NOT NULL DEFAULT '1'
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `employe`
--

INSERT INTO `employe` (`employe_id`, `employe_name`, `alias`, `email`, `mobile`, `position`, `createdby`, `employename`, `password`, `status`) VALUES
(7, 'new wmployee here', NULL, 'newamploye23@gmail.com', '5689784523', 0, 1, NULL, NULL, 0),
(5, 'raj', NULL, 'gupta@gamil.com', '6584777911', 1, 1, NULL, NULL, 0),
(6, 'raj mathur', 'ram', 'ras@gamil.com', '1234567890', 1, 1, NULL, NULL, 0),
(8, 'raj mathur', 'ram', 'haas@gamil.com', '1234567890', 1, 1, NULL, NULL, 0),
(9, 'john doe', NULL, 'johndoe34@gmail.com', '9413103520', 0, 1, NULL, NULL, 0),
(10, 'new test', NULL, 'newedittest34@gmail.com', '8764049758', 1, 1, NULL, NULL, 1),
(11, 'new aakash', NULL, 'aakashpaliwal95@gmail.com', '8764049857', 1, 1, NULL, NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `equipment`
--

CREATE TABLE `equipment` (
  `equipment_id` int(11) NOT NULL,
  `equipment_name` varchar(100) NOT NULL,
  `status` int(1) NOT NULL DEFAULT '1',
  `myequipment_id` int(11) NOT NULL COMMENT 'fk',
  `site_id` int(11) NOT NULL COMMENT 'fk',
  `createdby` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `equipment`
--

INSERT INTO `equipment` (`equipment_id`, `equipment_name`, `status`, `myequipment_id`, `site_id`, `createdby`) VALUES
(1, 'firstequipment', 0, 1, 5, 1),
(2, 'secondequipment333', 1, 2, 5, 1),
(3, 'ACDC7845', 1, 2, 5, 1);

-- --------------------------------------------------------

--
-- Table structure for table `invoice`
--

CREATE TABLE `invoice` (
  `invoice_id` int(11) NOT NULL,
  `dummy` varchar(100) NOT NULL,
  `status` int(1) NOT NULL DEFAULT '1'
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `invoice`
--

INSERT INTO `invoice` (`invoice_id`, `dummy`, `status`) VALUES
(1, 'invo1', 1),
(2, 'invo2', 1);

-- --------------------------------------------------------

--
-- Table structure for table `location`
--

CREATE TABLE `location` (
  `location_id` int(11) NOT NULL,
  `zone_id` int(11) NOT NULL COMMENT 'fk',
  `location_name` varchar(100) NOT NULL,
  `status` int(1) NOT NULL DEFAULT '1',
  `createdby` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `location`
--

INSERT INTO `location` (`location_id`, `zone_id`, `location_name`, `status`, `createdby`) VALUES
(1, 2, 'SHESHADRI COLONY', 1, 1),
(2, 3, 'MG ROAD', 0, 1),
(3, 2, 'RAJA KA MAHAL', 1, 1),
(4, 9, 'HARYANA', 0, 1),
(5, 5, 'HYDERABAD', 1, 1),
(6, 3, 'MALVA38', 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `loc_sup`
--

CREATE TABLE `loc_sup` (
  `loc_sup_id` int(11) NOT NULL,
  `location_id` int(11) NOT NULL,
  `supervisor_id` int(11) NOT NULL,
  `status` int(11) NOT NULL DEFAULT '1',
  `createdby` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `loc_sup`
--

INSERT INTO `loc_sup` (`loc_sup_id`, `location_id`, `supervisor_id`, `status`, `createdby`) VALUES
(1, 1, 7, 1, 0),
(2, 5, 11, 0, 1),
(3, 5, 11, 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `myequipment`
--

CREATE TABLE `myequipment` (
  `myequipment_id` int(11) NOT NULL,
  `category_id` int(100) NOT NULL,
  `capacity` varchar(100) NOT NULL,
  `brand` varchar(100) NOT NULL,
  `model` varchar(100) NOT NULL,
  `year` varchar(4) NOT NULL,
  `status` int(1) NOT NULL DEFAULT '1'
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `myequipment`
--

INSERT INTO `myequipment` (`myequipment_id`, `category_id`, `capacity`, `brand`, `model`, `year`, `status`) VALUES
(1, 1, '200 L', 'test1', 'test1', '2001', 0),
(2, 2, '800085', 'brand y', 'model test', '2016', 1),
(3, 2, '589', 'bransdcv', '2356tx', '2000', 1);

-- --------------------------------------------------------

--
-- Table structure for table `profile`
--

CREATE TABLE `profile` (
  `profile_id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `dummy` varchar(100) NOT NULL,
  `status` int(1) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `proposal`
--

CREATE TABLE `proposal` (
  `proposal_id` int(11) NOT NULL,
  `dummy` varchar(100) NOT NULL,
  `status` int(1) NOT NULL DEFAULT '1'
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `schedule`
--

CREATE TABLE `schedule` (
  `schedule_id` int(11) NOT NULL,
  `customer_id` int(11) NOT NULL COMMENT 'fk,not required',
  `equipment_id` int(11) NOT NULL COMMENT 'fk',
  `zone_id` int(11) NOT NULL COMMENT 'fk,not required',
  `assignDate` date NOT NULL DEFAULT '0000-00-00',
  `state` int(11) NOT NULL DEFAULT '0' COMMENT '0 for incomplete',
  `dummy` varchar(100) NOT NULL,
  `status` int(1) NOT NULL DEFAULT '1'
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `schedule`
--

INSERT INTO `schedule` (`schedule_id`, `customer_id`, `equipment_id`, `zone_id`, `assignDate`, `state`, `dummy`, `status`) VALUES
(1, 0, 0, 0, '0000-00-00', 1, 'scheduletest2', 0),
(2, 0, 0, 0, '0000-00-00', 1, 'testr', 1),
(3, 0, 0, 0, '2018-09-01', 1, 'testr', 1),
(4, 1, 1, 1, '2018-10-05', 1, 'testr', 1);

-- --------------------------------------------------------

--
-- Table structure for table `site`
--

CREATE TABLE `site` (
  `site_id` int(11) NOT NULL,
  `customer_id` int(11) NOT NULL COMMENT 'fk',
  `location_id` int(11) NOT NULL COMMENT 'fk',
  `address` varchar(255) NOT NULL,
  `createdby` int(11) DEFAULT NULL,
  `status` int(1) NOT NULL DEFAULT '1'
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `site`
--

INSERT INTO `site` (`site_id`, `customer_id`, `location_id`, `address`, `createdby`, `status`) VALUES
(1, 1, 1, '42,chitransh agnihotri', 1, 0),
(2, 3, 3, '13,TAJMAHAL AJMERROAD', 1, 0),
(3, 3, 3, '10,ALPHA TOWER', 1, 0),
(4, 3, 6, '48, NY STREET', 1, 0),
(5, 5, 6, '89, NY STREET', 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `zone`
--

CREATE TABLE `zone` (
  `zone_id` int(11) NOT NULL,
  `zone_name` varchar(100) NOT NULL,
  `pin` int(6) NOT NULL,
  `createdby` int(11) NOT NULL COMMENT 'fk',
  `status` int(1) NOT NULL DEFAULT '1'
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `zone`
--

INSERT INTO `zone` (`zone_id`, `zone_name`, `pin`, `createdby`, `status`) VALUES
(1, 'test1', 466787, 0, 0),
(2, 'NIMAR WEST', 123457, 1, 0),
(3, 'NIMAR NORTH', 123457, 1, 1),
(4, 'iit pawai', 123457, 1, 1),
(5, 'pawai', 123457, 1, 1),
(6, 'parag', 465674, 1, 0),
(7, 'MALVA', 234562, 1, 1),
(8, 'NIMAR', 123457, 1, 1),
(9, 'HARYANA', 235688, 1, 1),
(10, 'NAVLAKAH       2', 456789, 1, 0),
(11, 'MIT69666', 235689, 1, 0);

-- --------------------------------------------------------

--
-- Table structure for table `zone_supervisor`
--

CREATE TABLE `zone_supervisor` (
  `zone_supervisor_id` int(11) NOT NULL,
  `zone_id` int(11) NOT NULL,
  `supervisor_id` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`admin_id`),
  ADD KEY `admin_fk0` (`createdby`);

--
-- Indexes for table `amc`
--
ALTER TABLE `amc`
  ADD PRIMARY KEY (`amc_id`);

--
-- Indexes for table `amc_equip`
--
ALTER TABLE `amc_equip`
  ADD PRIMARY KEY (`amc_equip_id`);

--
-- Indexes for table `amc_service`
--
ALTER TABLE `amc_service`
  ADD PRIMARY KEY (`amc_service_id`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`category_id`);

--
-- Indexes for table `complaint`
--
ALTER TABLE `complaint`
  ADD PRIMARY KEY (`complaint_id`),
  ADD KEY `cust_loc_id` (`site_id`);

--
-- Indexes for table `complaint_type`
--
ALTER TABLE `complaint_type`
  ADD PRIMARY KEY (`complaint_type_id`);

--
-- Indexes for table `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`customer_id`);

--
-- Indexes for table `customer_type`
--
ALTER TABLE `customer_type`
  ADD PRIMARY KEY (`customer_type_id`);

--
-- Indexes for table `employe`
--
ALTER TABLE `employe`
  ADD PRIMARY KEY (`employe_id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `employename` (`employename`);

--
-- Indexes for table `equipment`
--
ALTER TABLE `equipment`
  ADD PRIMARY KEY (`equipment_id`),
  ADD KEY `myequipment_id` (`myequipment_id`),
  ADD KEY `cust_loc_id` (`site_id`);

--
-- Indexes for table `invoice`
--
ALTER TABLE `invoice`
  ADD PRIMARY KEY (`invoice_id`);

--
-- Indexes for table `location`
--
ALTER TABLE `location`
  ADD PRIMARY KEY (`location_id`),
  ADD KEY `zone_id` (`zone_id`);

--
-- Indexes for table `loc_sup`
--
ALTER TABLE `loc_sup`
  ADD PRIMARY KEY (`loc_sup_id`);

--
-- Indexes for table `myequipment`
--
ALTER TABLE `myequipment`
  ADD PRIMARY KEY (`myequipment_id`);

--
-- Indexes for table `profile`
--
ALTER TABLE `profile`
  ADD PRIMARY KEY (`profile_id`);

--
-- Indexes for table `proposal`
--
ALTER TABLE `proposal`
  ADD PRIMARY KEY (`proposal_id`);

--
-- Indexes for table `schedule`
--
ALTER TABLE `schedule`
  ADD PRIMARY KEY (`schedule_id`);

--
-- Indexes for table `site`
--
ALTER TABLE `site`
  ADD PRIMARY KEY (`site_id`),
  ADD KEY `customer_id` (`customer_id`),
  ADD KEY `location_id` (`location_id`);

--
-- Indexes for table `zone`
--
ALTER TABLE `zone`
  ADD PRIMARY KEY (`zone_id`);

--
-- Indexes for table `zone_supervisor`
--
ALTER TABLE `zone_supervisor`
  ADD PRIMARY KEY (`zone_supervisor_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `admin_id` int(9) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `amc`
--
ALTER TABLE `amc`
  MODIFY `amc_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `amc_equip`
--
ALTER TABLE `amc_equip`
  MODIFY `amc_equip_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `amc_service`
--
ALTER TABLE `amc_service`
  MODIFY `amc_service_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `category_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `complaint`
--
ALTER TABLE `complaint`
  MODIFY `complaint_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `complaint_type`
--
ALTER TABLE `complaint_type`
  MODIFY `complaint_type_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `customer`
--
ALTER TABLE `customer`
  MODIFY `customer_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `customer_type`
--
ALTER TABLE `customer_type`
  MODIFY `customer_type_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `employe`
--
ALTER TABLE `employe`
  MODIFY `employe_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `equipment`
--
ALTER TABLE `equipment`
  MODIFY `equipment_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `invoice`
--
ALTER TABLE `invoice`
  MODIFY `invoice_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `location`
--
ALTER TABLE `location`
  MODIFY `location_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `loc_sup`
--
ALTER TABLE `loc_sup`
  MODIFY `loc_sup_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `myequipment`
--
ALTER TABLE `myequipment`
  MODIFY `myequipment_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `profile`
--
ALTER TABLE `profile`
  MODIFY `profile_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `proposal`
--
ALTER TABLE `proposal`
  MODIFY `proposal_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `schedule`
--
ALTER TABLE `schedule`
  MODIFY `schedule_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `site`
--
ALTER TABLE `site`
  MODIFY `site_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `zone`
--
ALTER TABLE `zone`
  MODIFY `zone_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `zone_supervisor`
--
ALTER TABLE `zone_supervisor`
  MODIFY `zone_supervisor_id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
