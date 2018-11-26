-- phpMyAdmin SQL Dump
-- version 3.3.9
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Nov 17, 2018 at 01:32 PM
-- Server version: 5.1.53
-- PHP Version: 5.3.4

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `smsv2`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE IF NOT EXISTS `admin` (
  `admin_id` int(9) NOT NULL AUTO_INCREMENT,
  `admin_status` int(1) NOT NULL DEFAULT '1' COMMENT '1 for active 0 for suspended/deleted',
  `admin_full_name` varchar(255) NOT NULL,
  `admin_email` varchar(255) NOT NULL,
  `admin_mobile1` varchar(13) NOT NULL,
  `admin_mobile2` varchar(13) NOT NULL,
  `admin_date_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `admin_createdby` int(9) NOT NULL DEFAULT '0',
  `adminname` varchar(255) NOT NULL,
  `admin_password` varchar(500) NOT NULL,
  `password_token` varchar(500) NOT NULL,
  `token_time` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `admin_ip` varchar(255) NOT NULL,
  `admin_dp` varchar(250) NOT NULL,
  PRIMARY KEY (`admin_id`),
  KEY `admin_fk0` (`admin_createdby`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=8 ;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`admin_id`, `admin_status`, `admin_full_name`, `admin_email`, `admin_mobile1`, `admin_mobile2`, `admin_date_time`, `admin_createdby`, `adminname`, `admin_password`, `password_token`, `token_time`, `admin_ip`, `admin_dp`) VALUES
(1, 1, '', 'parag@gmail.com', '', '', '2018-09-04 13:35:26', 0, 'parag', 'e7b0ab597644579afe2bd0c5194a76f707b2bcbf2015c6abbbbc65cfa2dfe73e', '', '0000-00-00 00:00:00', '', ''),
(2, 1, 'parag gupta', 'guptaparag1996@gmail.com', '', '', '2018-09-21 12:24:36', 1, 'gupta', '46011b5aab12a95bc104e3c7abc184e2d9e0bc7994159ef9b337d781db97cce0', '', '0000-00-00 00:00:00', '', 'parag.jpg'),
(3, 1, 'parag', '', '', '', '2018-09-22 15:30:13', 2, 'divana', '85b2ab7fc2fa0ab39c66c05eadffbad5cd3d47a6cdc761ad41b7cb84b9a4b251', '', '0000-00-00 00:00:00', '', ''),
(4, 0, 'Parag Gupta', 'guptag1996@gmail.com', '', '', '2018-11-02 17:38:55', 1, '', 'cf6e5b23b7eb8725f062559a269636c7196f053441055e8e32fffbbceda3eede', '', '0000-00-00 00:00:00', '', ''),
(5, 0, 'Parag ', 'gparag1996@gmail.com', '', '', '2018-11-03 18:47:39', 1, 'aaaa', 'e7b0ab597644579afe2bd0c5194a76f707b2bcbf2015c6abbbbc65cfa2dfe73e', '', '0000-00-00 00:00:00', '', ''),
(6, 0, 'gyani', 'gyan@gmail.com', '', '', '2018-11-12 13:37:28', 1, 'chand', 'e7b0ab597644579afe2bd0c5194a76f707b2bcbf2015c6abbbbc65cfa2dfe73e', '', '0000-00-00 00:00:00', '', ''),
(7, 1, 'tester', 'test@gmail.com', '', '', '2018-11-12 16:30:02', 1, 'test', 'ad7621403cdcc4e5c7ff1558043240fb5137ab09182c4f7acca984bffa29a1ad', '', '0000-00-00 00:00:00', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `amc`
--

CREATE TABLE IF NOT EXISTS `amc` (
  `amc_id` int(11) NOT NULL AUTO_INCREMENT,
  `site_id` int(11) NOT NULL,
  `createdby` int(11) NOT NULL,
  `status` int(1) NOT NULL DEFAULT '1',
  `total_price` int(11) NOT NULL,
  `startDate` date NOT NULL,
  PRIMARY KEY (`amc_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=20 ;

--
-- Dumping data for table `amc`
--

INSERT INTO `amc` (`amc_id`, `site_id`, `createdby`, `status`, `total_price`, `startDate`) VALUES
(3, 0, 1, 1, 700, '0000-00-00'),
(4, 0, 1, 1, 700, '0000-00-00'),
(5, 0, 1, 1, 700, '2016-12-12'),
(6, 0, 1, 1, 700, '0000-00-00'),
(7, 0, 1, 1, 700, '2016-12-20'),
(8, 0, 1, 1, 70, '2016-12-20'),
(9, 0, 1, 1, 7800, '2012-12-13'),
(10, 0, 1, 1, 7800, '2012-12-13'),
(11, 0, 1, 1, 7800, '2012-12-13'),
(12, 0, 1, 1, 7800, '2012-12-13'),
(13, 0, 1, 1, 100, '2012-12-13'),
(14, 0, 1, 1, 100, '2012-12-13'),
(15, 0, 1, 1, 100, '2012-12-13'),
(16, 0, 1, 1, 100, '2012-12-13'),
(17, 2, 1, 1, 1000, '2017-08-01'),
(18, 3, 1, 1, 4000, '2018-11-15'),
(19, 5, 1, 0, 110, '2000-10-11');

-- --------------------------------------------------------

--
-- Table structure for table `amc_equip`
--

CREATE TABLE IF NOT EXISTS `amc_equip` (
  `amc_equip_id` int(11) NOT NULL AUTO_INCREMENT,
  `equipment_id` int(11) NOT NULL,
  `frequency` int(11) NOT NULL COMMENT '3,6,12',
  `price` int(11) NOT NULL,
  `nextDate` date NOT NULL,
  `prevDate` date DEFAULT NULL,
  `amc_id` int(11) NOT NULL,
  PRIMARY KEY (`amc_equip_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=10 ;

--
-- Dumping data for table `amc_equip`
--

INSERT INTO `amc_equip` (`amc_equip_id`, `equipment_id`, `frequency`, `price`, `nextDate`, `prevDate`, `amc_id`) VALUES
(1, 1, 3, 3000, '2017-11-01', NULL, 10),
(2, 1, 6, 6000, '2018-02-01', NULL, 11),
(3, 1, 3, 7800, '2013-03-13', NULL, 12),
(4, 4, 3, 22, '2013-03-13', NULL, 16),
(5, 1, 6, 78, '2013-06-13', NULL, 16),
(6, 2, 3, 3000, '2017-11-01', NULL, 17),
(7, 1, 6, 6000, '2018-02-01', NULL, 17),
(8, 3, 3, 4000, '2019-02-15', NULL, 18),
(9, 4, 3, 90, '2001-01-11', NULL, 19);

-- --------------------------------------------------------

--
-- Table structure for table `amc_service`
--

CREATE TABLE IF NOT EXISTS `amc_service` (
  `amc_service_id` int(11) NOT NULL AUTO_INCREMENT,
  `amc_equip_id` int(11) NOT NULL,
  `assignto` int(11) NOT NULL COMMENT 'assignto/doneby',
  `dos` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `state` int(11) NOT NULL DEFAULT '1' COMMENT 'in progress 3,serviced 2,not serviced 1',
  `log` text COMMENT 'report',
  `amc_service_closer_file` int(11) NOT NULL,
  `status` int(11) NOT NULL,
  PRIMARY KEY (`amc_service_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6 ;

--
-- Dumping data for table `amc_service`
--

INSERT INTO `amc_service` (`amc_service_id`, `amc_equip_id`, `assignto`, `dos`, `state`, `log`, `amc_service_closer_file`, `status`) VALUES
(2, 7, 2, '2018-10-27 17:55:11', 2, 'jldi krna he', 0, 0),
(3, 7, 2, '2018-10-27 18:08:36', 1, 'second time', 0, 0),
(4, 9, 8, '2018-11-03 18:39:05', 1, NULL, 0, 0),
(5, 7, 12, '2018-11-12 17:14:31', 3, NULL, 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE IF NOT EXISTS `category` (
  `category_id` int(11) NOT NULL AUTO_INCREMENT,
  `category_name` varchar(100) NOT NULL,
  `category_status` int(11) NOT NULL DEFAULT '1',
  PRIMARY KEY (`category_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`category_id`, `category_name`, `category_status`) VALUES
(1, 'Tv', 1),
(2, 'AC', 1);

-- --------------------------------------------------------

--
-- Table structure for table `complaint`
--

CREATE TABLE IF NOT EXISTS `complaint` (
  `complaint_id` int(11) NOT NULL AUTO_INCREMENT,
  `complaint_description` text NOT NULL,
  `complaint_equipment_position` text,
  `complaint_closer_file` text,
  `complaint_completion_date` varchar(100) DEFAULT NULL,
  `complaint_completed_by` int(11) DEFAULT NULL,
  `complaint_type_id` int(11) NOT NULL,
  `complaint_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `complaint_state` int(11) NOT NULL DEFAULT '0' COMMENT '0 for new/pending 3/prog 1/ cpmleted 2',
  `complaint_createdby` int(11) NOT NULL COMMENT 'admin_id',
  `complaint_allocated_to` int(11) NOT NULL COMMENT 'employ_id/supervisor',
  `complaint_allocation` int(11) NOT NULL DEFAULT '0' COMMENT '0 not allocated,1 allocated',
  `complaint_allocation_date` date DEFAULT NULL,
  `complaint_allocated_by` int(11) DEFAULT NULL,
  `complaint_log` text NOT NULL,
  `complaint_status` int(1) NOT NULL DEFAULT '1',
  `site_id` int(11) NOT NULL COMMENT 'fk',
  PRIMARY KEY (`complaint_id`),
  KEY `cust_loc_id` (`site_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=7 ;

--
-- Dumping data for table `complaint`
--

INSERT INTO `complaint` (`complaint_id`, `complaint_description`, `complaint_equipment_position`, `complaint_closer_file`, `complaint_completion_date`, `complaint_completed_by`, `complaint_type_id`, `complaint_date`, `complaint_state`, `complaint_createdby`, `complaint_allocated_to`, `complaint_allocation`, `complaint_allocation_date`, `complaint_allocated_by`, `complaint_log`, `complaint_status`, `site_id`) VALUES
(1, 'test2', NULL, NULL, NULL, NULL, 0, '0000-00-00 00:00:00', 3, 1, 7, 0, NULL, NULL, 'raj pending', 1, 2),
(2, 'test test', NULL, NULL, NULL, NULL, 0, '2018-10-16 07:55:24', 1, 1, 7, 0, NULL, NULL, '', 1, 1),
(3, 'pani nhi aa rha', NULL, NULL, NULL, NULL, 0, '2018-11-02 19:07:12', 0, 1, 0, 0, NULL, NULL, '', 1, 3),
(4, 'axsc cc', NULL, NULL, NULL, NULL, 0, '2018-11-03 17:15:04', 0, 1, 0, 0, NULL, NULL, '', 0, 3),
(5, '1234 is khallas', NULL, NULL, NULL, NULL, 0, '2018-11-03 18:22:31', 2, 1, 8, 0, NULL, NULL, 'tt', 1, 5),
(6, 'aasdd', NULL, NULL, NULL, NULL, 0, '2018-11-12 17:16:43', 0, 1, 0, 0, NULL, NULL, '', 1, 6);

-- --------------------------------------------------------

--
-- Table structure for table `complaint_type`
--

CREATE TABLE IF NOT EXISTS `complaint_type` (
  `complaint_type_id` int(11) NOT NULL AUTO_INCREMENT,
  `complaint_type_name` varchar(500) NOT NULL,
  `status` int(11) NOT NULL DEFAULT '1',
  PRIMARY KEY (`complaint_type_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

--
-- Dumping data for table `complaint_type`
--


-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

CREATE TABLE IF NOT EXISTS `customer` (
  `customer_id` int(11) NOT NULL AUTO_INCREMENT,
  `customer_name` varchar(100) NOT NULL,
  `customer_spoc` varchar(100) DEFAULT NULL,
  `customer_contact_person` varchar(100) NOT NULL,
  `customer_email` varchar(100) NOT NULL,
  `customer_mobile1` varchar(13) DEFAULT NULL,
  `customer_tel_office` varchar(20) NOT NULL,
  `customer_tel_residence` varchar(20) DEFAULT NULL,
  `customer_address1` varchar(255) NOT NULL,
  `customer_address2` varchar(100) DEFAULT NULL,
  `customer_address3` varchar(100) DEFAULT NULL,
  `customer_status` int(1) NOT NULL DEFAULT '1',
  `customer_special_comment` int(11) NOT NULL COMMENT 'fk,customer_type',
  `customer_code` varchar(100) NOT NULL,
  PRIMARY KEY (`customer_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=8 ;

--
-- Dumping data for table `customer`
--

INSERT INTO `customer` (`customer_id`, `customer_name`, `customer_spoc`, `customer_contact_person`, `customer_email`, `customer_mobile1`, `customer_tel_office`, `customer_tel_residence`, `customer_address1`, `customer_address2`, `customer_address3`, `customer_status`, `customer_special_comment`, `customer_code`) VALUES
(1, 'test2', 'alpha', '', '2001@gmi.in', '1234567890', '', NULL, 'hello', NULL, NULL, 1, 0, ''),
(2, 'TATA', NULL, '', 'taaata@gammil.com', NULL, '', NULL, '', NULL, NULL, 0, 0, ''),
(3, 'BIRLA', '456', '', 'guptaparag1996@gmail.com', '9584777921', '', NULL, '', NULL, NULL, 0, 0, ''),
(4, 'IBM', 'rada', '', 'taaata@gammil.com', NULL, '', NULL, '', NULL, NULL, 1, 0, ''),
(5, 'BIRLA', '123', '', 'parag1996@gmail.com', '9584777921', '', NULL, '', NULL, NULL, 0, 0, ''),
(6, 'CC1', '123', '', 'guptaparag1996@gmail.com', '9584777921', '', NULL, '11,gajadhrnagar,novlakha', NULL, NULL, 1, 0, ''),
(7, 'CUST1', '1234', '', 'cust@gmail.com', '9876112333', '', NULL, '11,nemar', NULL, NULL, 1, 0, '');

-- --------------------------------------------------------

--
-- Table structure for table `customer_type`
--

CREATE TABLE IF NOT EXISTS `customer_type` (
  `customer_type_id` int(11) NOT NULL AUTO_INCREMENT,
  `customer_type_name` varchar(255) NOT NULL,
  `status` int(11) NOT NULL DEFAULT '1',
  PRIMARY KEY (`customer_type_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `customer_type`
--

INSERT INTO `customer_type` (`customer_type_id`, `customer_type_name`, `status`) VALUES
(1, 'NO COMMENT', 1),
(2, 'VIP CLIENT', 1),
(3, 'MID SIZE PREMIUM', 1),
(4, 'RESIDENCE CLIENT', 1);

-- --------------------------------------------------------

--
-- Table structure for table `employe`
--

CREATE TABLE IF NOT EXISTS `employe` (
  `employe_id` int(11) NOT NULL AUTO_INCREMENT,
  `employe_name` varchar(100) NOT NULL,
  `employe_alias` varchar(100) DEFAULT NULL COMMENT 'other name for removing conflict',
  `employe_email` varchar(100) NOT NULL,
  `employe_mobile1` varchar(13) NOT NULL,
  `employe_mobile2` varchar(13) DEFAULT NULL,
  `employe_position` int(1) NOT NULL,
  `employe_blood_group` varchar(4) DEFAULT NULL,
  `employe_emergency_contact_number` varchar(13) NOT NULL,
  `employe_account_detail` text,
  `dummy1` int(11) DEFAULT NULL,
  `dummy2` int(11) DEFAULT NULL,
  `employe_createdby` int(11) NOT NULL COMMENT 'fk adminid',
  `employename` varchar(100) DEFAULT NULL,
  `employe_password` varchar(255) DEFAULT NULL,
  `employe_status` int(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`employe_id`),
  UNIQUE KEY `email` (`employe_email`),
  UNIQUE KEY `employename` (`employename`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=13 ;

--
-- Dumping data for table `employe`
--

INSERT INTO `employe` (`employe_id`, `employe_name`, `employe_alias`, `employe_email`, `employe_mobile1`, `employe_mobile2`, `employe_position`, `employe_blood_group`, `employe_emergency_contact_number`, `employe_account_detail`, `dummy1`, `dummy2`, `employe_createdby`, `employename`, `employe_password`, `employe_status`) VALUES
(7, 'raj mathur', NULL, 'gpasd@gamil.com', '1234567890', '', 1, NULL, '', NULL, NULL, NULL, 1, NULL, NULL, 1),
(5, 'raj', NULL, 'gupta@gamil.com', '6584777911', '', 1, NULL, '', NULL, NULL, NULL, 1, NULL, NULL, 0),
(6, 'raj mathur', 'ram', 'ras@gamil.com', '1234567890', '', 1, NULL, '', NULL, NULL, NULL, 1, NULL, NULL, 0),
(8, 'raj mathur', 'ram', 'haas@gamil.com', '1234567890', '', 1, NULL, '', NULL, NULL, NULL, 1, NULL, NULL, 1),
(9, 'srk', '', 'guptaparag1996@gmail.com', '9584777921', '', 0, NULL, '', NULL, NULL, NULL, 1, NULL, NULL, 0),
(10, 'e1', '', 'arag1996@gmail.com', '9584777921', '', 1, NULL, '', NULL, NULL, NULL, 1, NULL, NULL, 1),
(11, 'e1', '', 'gupta96@gmail.com', '9584777921', '', 0, NULL, '', NULL, NULL, NULL, 1, NULL, NULL, 1),
(12, 'tart', '', 'gert996@gmail.com', '9584777929', '', 1, NULL, '', NULL, NULL, NULL, 1, NULL, NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `emp_loc`
--

CREATE TABLE IF NOT EXISTS `emp_loc` (
  `emp_loc_id` int(11) NOT NULL AUTO_INCREMENT,
  `location_id` int(11) DEFAULT NULL,
  `zone_id` int(11) NOT NULL,
  `employe_id` int(11) NOT NULL,
  `emp_loc_status` int(11) NOT NULL DEFAULT '1',
  `location_allocated_by` int(11) NOT NULL,
  PRIMARY KEY (`emp_loc_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

--
-- Dumping data for table `emp_loc`
--


-- --------------------------------------------------------

--
-- Table structure for table `equipment`
--

CREATE TABLE IF NOT EXISTS `equipment` (
  `equipment_createdby` int(11) NOT NULL,
  `equipment_id` int(11) NOT NULL AUTO_INCREMENT,
  `equipment_serial_number` varchar(255) NOT NULL,
  `po_type` varchar(255) DEFAULT NULL,
  `invoice_number` varchar(255) DEFAULT NULL,
  `invoice_date` date DEFAULT NULL,
  `installation_date` date DEFAULT NULL,
  `commission_date` date DEFAULT NULL,
  `commission_report_number` varchar(255) DEFAULT NULL,
  `equipment_position` text,
  `equipment_status` int(1) NOT NULL DEFAULT '1',
  `equipment_master_id` int(11) NOT NULL COMMENT 'fk',
  `site_id` int(11) NOT NULL COMMENT 'fk',
  PRIMARY KEY (`equipment_id`),
  KEY `myequipment_id` (`equipment_master_id`),
  KEY `cust_loc_id` (`site_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=7 ;

--
-- Dumping data for table `equipment`
--

INSERT INTO `equipment` (`equipment_createdby`, `equipment_id`, `equipment_serial_number`, `po_type`, `invoice_number`, `invoice_date`, `installation_date`, `commission_date`, `commission_report_number`, `equipment_position`, `equipment_status`, `equipment_master_id`, `site_id`) VALUES
(0, 1, 'firstequipment', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, 1, 2),
(0, 2, 'secondequipment', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, 1, 2),
(1, 3, '5679', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 3, 3),
(1, 4, '123456', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 4, 5),
(1, 5, '12345', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 4, 5),
(1, 6, '1000', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, 5, 6);

-- --------------------------------------------------------

--
-- Table structure for table `equipment_master`
--

CREATE TABLE IF NOT EXISTS `equipment_master` (
  `equipment_master_id` int(11) NOT NULL AUTO_INCREMENT,
  `category_id` int(11) NOT NULL,
  `capacity` varchar(100) NOT NULL,
  `brand` varchar(100) NOT NULL,
  `model` varchar(100) NOT NULL,
  `year_of_discontinued` int(4) DEFAULT NULL,
  `year_of_launch` int(4) DEFAULT NULL COMMENT 'expire year',
  `a2` varchar(255) NOT NULL,
  `a3` varchar(255) NOT NULL,
  `equipment_master_status` int(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`equipment_master_id`),
  UNIQUE KEY `category_id` (`category_id`,`capacity`,`brand`,`model`,`year_of_discontinued`,`equipment_master_status`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6 ;

--
-- Dumping data for table `equipment_master`
--

INSERT INTO `equipment_master` (`equipment_master_id`, `category_id`, `capacity`, `brand`, `model`, `year_of_discontinued`, `year_of_launch`, `a2`, `a3`, `equipment_master_status`) VALUES
(1, 1, '200 L', 'test1', 'test1', 2001, 0, '', '', 0),
(2, 2, '4', 'baba', 'raja', 2013, 0, '', '', 1),
(3, 2, '13 ton', 'btest', 'mtest', 2019, 0, '', '', 1),
(4, 1, 'c111', 'b111', 'abc', 2019, 0, '', '', 1),
(5, 2, '300', 'samsung', '1234', 2012, 0, '', '', 1);

-- --------------------------------------------------------

--
-- Table structure for table `invoice`
--

CREATE TABLE IF NOT EXISTS `invoice` (
  `invoice_id` int(11) NOT NULL AUTO_INCREMENT,
  `dummy` varchar(100) NOT NULL,
  `status` int(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`invoice_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

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

CREATE TABLE IF NOT EXISTS `location` (
  `location_id` int(11) NOT NULL AUTO_INCREMENT,
  `zone_id` int(11) NOT NULL COMMENT 'fk',
  `location_name` varchar(100) NOT NULL,
  `location_pin` int(6) NOT NULL,
  `location_status` int(1) NOT NULL DEFAULT '1',
  `location_createdby` int(11) NOT NULL,
  PRIMARY KEY (`location_id`),
  KEY `zone_id` (`zone_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=7 ;

--
-- Dumping data for table `location`
--

INSERT INTO `location` (`location_id`, `zone_id`, `location_name`, `location_pin`, `location_status`, `location_createdby`) VALUES
(1, 2, 'SHESHADRI COLONY', 0, 1, 1),
(2, 3, 'MG ROAD', 0, 0, 1),
(3, 5, 'RAJA KA MAHAL', 0, 1, 1),
(4, 7, 'PATAL', 0, 0, 1),
(5, 12, 'L1', 0, 0, 1),
(6, 11, 'LOC4', 0, 0, 1);

-- --------------------------------------------------------

--
-- Table structure for table `loc_sup`
--

CREATE TABLE IF NOT EXISTS `loc_sup` (
  `loc_sup_id` int(11) NOT NULL AUTO_INCREMENT,
  `location_id` int(11) NOT NULL,
  `supervisor_id` int(11) NOT NULL,
  `status` int(11) NOT NULL DEFAULT '1',
  `createdby` int(11) NOT NULL,
  PRIMARY KEY (`loc_sup_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `loc_sup`
--

INSERT INTO `loc_sup` (`loc_sup_id`, `location_id`, `supervisor_id`, `status`, `createdby`) VALUES
(1, 3, 8, 0, 1),
(2, 5, 7, 0, 1),
(3, 3, 10, 1, 1),
(4, 1, 12, 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `profile`
--

CREATE TABLE IF NOT EXISTS `profile` (
  `profile_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `dummy` varchar(100) NOT NULL,
  `status` int(1) NOT NULL,
  PRIMARY KEY (`profile_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

--
-- Dumping data for table `profile`
--


-- --------------------------------------------------------

--
-- Table structure for table `proposal`
--

CREATE TABLE IF NOT EXISTS `proposal` (
  `proposal_id` int(11) NOT NULL AUTO_INCREMENT,
  `dummy` varchar(100) NOT NULL,
  `status` int(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`proposal_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

--
-- Dumping data for table `proposal`
--


-- --------------------------------------------------------

--
-- Table structure for table `schedule`
--

CREATE TABLE IF NOT EXISTS `schedule` (
  `schedule_id` int(11) NOT NULL AUTO_INCREMENT,
  `customer_id` int(11) NOT NULL COMMENT 'fk,not required',
  `equipment_id` int(11) NOT NULL COMMENT 'fk',
  `zone_id` int(11) NOT NULL COMMENT 'fk,not required',
  `assignDate` date NOT NULL DEFAULT '0000-00-00',
  `state` int(11) NOT NULL DEFAULT '0' COMMENT '0 for incomplete',
  `dummy` varchar(100) NOT NULL,
  `status` int(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`schedule_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

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

CREATE TABLE IF NOT EXISTS `site` (
  `site_id` int(11) NOT NULL AUTO_INCREMENT,
  `site_name` varchar(255) NOT NULL,
  `customer_id` int(11) NOT NULL COMMENT 'fk',
  `location_id` int(11) NOT NULL COMMENT 'fk',
  `site_address1` varchar(255) NOT NULL,
  `site_address2` varchar(255) DEFAULT NULL,
  `site_address3` varchar(255) DEFAULT NULL,
  `site_landmark` varchar(255) NOT NULL,
  `site_createdby` int(11) DEFAULT NULL,
  `site_status` int(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`site_id`),
  KEY `customer_id` (`customer_id`),
  KEY `location_id` (`location_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=7 ;

--
-- Dumping data for table `site`
--

INSERT INTO `site` (`site_id`, `site_name`, `customer_id`, `location_id`, `site_address1`, `site_address2`, `site_address3`, `site_landmark`, `site_createdby`, `site_status`) VALUES
(1, '', 1, 1, '42,chitransh agnihotri', NULL, NULL, '', 1, 0),
(2, '', 3, 3, '13,TAJMAHAL AJMERROAD', NULL, NULL, '', 1, 1),
(3, '', 1, 3, '10,ALPHA TOWER', NULL, NULL, '', 1, 0),
(4, '', 1, 1, '11,GAJADHRNAGAR,NOVLAKHA', NULL, NULL, '', 1, 0),
(5, '', 6, 5, '11,GAJADHRNAGAR,NOVLAKHA', NULL, NULL, '', 1, 0),
(6, '', 7, 1, '45', NULL, NULL, '', 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `site_contact`
--

CREATE TABLE IF NOT EXISTS `site_contact` (
  `site_contact_id` int(11) NOT NULL AUTO_INCREMENT,
  `site_contact_person` varchar(255) NOT NULL,
  `site_id` int(11) NOT NULL,
  `site_contact_mobile1` varchar(13) NOT NULL,
  `site_contact_mobile2` varchar(13) DEFAULT NULL,
  `site_contact_email` varchar(255) NOT NULL,
  `site_contact_status` int(11) NOT NULL DEFAULT '1',
  PRIMARY KEY (`site_contact_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

--
-- Dumping data for table `site_contact`
--


-- --------------------------------------------------------

--
-- Table structure for table `zone`
--

CREATE TABLE IF NOT EXISTS `zone` (
  `zone_id` int(11) NOT NULL AUTO_INCREMENT,
  `zone_name` varchar(100) NOT NULL,
  `zone_createdby` int(11) NOT NULL COMMENT 'fk',
  `zone_status` int(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`zone_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=14 ;

--
-- Dumping data for table `zone`
--

INSERT INTO `zone` (`zone_id`, `zone_name`, `zone_createdby`, `zone_status`) VALUES
(1, 'test1', 0, 0),
(2, 'NIMAR WEST', 1, 1),
(3, 'NIMAR NORTH', 1, 1),
(4, 'iit pawai', 1, 1),
(5, 'pawai', 1, 1),
(6, 'parag', 1, 0),
(7, 'MALVA', 1, 0),
(8, 'NIMAR', 1, 0),
(9, 'BUNDELKHAND', 1, 0),
(10, 'BUNDELKHAND EAST', 1, 0),
(11, 'GZONLL', 1, 1),
(12, 'Z2', 1, 0),
(13, 'ZONE3', 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `zone_supervisor`
--

CREATE TABLE IF NOT EXISTS `zone_supervisor` (
  `zone_supervisor_id` int(11) NOT NULL AUTO_INCREMENT,
  `zone_id` int(11) NOT NULL,
  `supervisor_id` int(11) NOT NULL,
  PRIMARY KEY (`zone_supervisor_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

--
-- Dumping data for table `zone_supervisor`
--

