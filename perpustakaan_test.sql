-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 13 Mar 2020 pada 05.49
-- Versi server: 10.1.38-MariaDB
-- Versi PHP: 7.3.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `perpustakaan_test`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `admin`
--

CREATE TABLE `admin` (
  `user_id` int(5) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `admin`
--

INSERT INTO `admin` (`user_id`, `username`, `password`) VALUES
(1, 'admin', '21232f297a57a5a743894a0e4a801fc3');

-- --------------------------------------------------------

--
-- Struktur dari tabel `books`
--

CREATE TABLE `books` (
  `book_id` int(5) NOT NULL,
  `book_name` varchar(255) NOT NULL,
  `book_author` varchar(255) NOT NULL,
  `book_status` enum('TERSEDIA','DIPINJAM') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `books`
--

INSERT INTO `books` (`book_id`, `book_name`, `book_author`, `book_status`) VALUES
(1, 'Pemrograman Python', 'Budi Raharjo', 'TERSEDIA'),
(2, 'Pemrograman C++', 'Budi Raharjo', 'TERSEDIA'),
(5, 'Pemrograman Cobol', 'Budi Raharjo', 'TERSEDIA');

-- --------------------------------------------------------

--
-- Struktur dari tabel `borrowing`
--

CREATE TABLE `borrowing` (
  `borrow_id` int(5) NOT NULL,
  `member_id` int(5) NOT NULL,
  `borrowing_status` enum('PINJAM','KEMBALI') NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `borrowing`
--

INSERT INTO `borrowing` (`borrow_id`, `member_id`, `borrowing_status`, `created_at`, `updated_at`) VALUES
(1, 1, '', '2020-03-11 16:01:41', '2020-03-11 16:01:41'),
(2, 1, 'PINJAM', '2020-03-11 22:51:43', '2020-03-11 22:51:43'),
(3, 1, 'PINJAM', '2020-03-11 22:53:53', '2020-03-11 22:53:53'),
(4, 1, 'PINJAM', '2020-03-11 22:54:11', '2020-03-11 22:54:11'),
(5, 1, 'PINJAM', '2020-03-11 22:54:44', '2020-03-11 22:54:44'),
(7, 1, 'KEMBALI', '2020-03-11 23:24:53', '2020-03-12 01:29:45'),
(8, 1, 'PINJAM', '2020-03-12 01:51:12', '2020-03-12 01:51:12'),
(9, 1, 'PINJAM', '2020-03-12 01:51:55', '2020-03-12 01:51:55'),
(10, 1, 'PINJAM', '2020-03-12 01:53:02', '2020-03-12 01:53:02'),
(11, 1, 'KEMBALI', '2020-03-12 01:53:33', '2020-03-12 01:55:39');

-- --------------------------------------------------------

--
-- Struktur dari tabel `borrow_details`
--

CREATE TABLE `borrow_details` (
  `borrow_id` int(5) NOT NULL,
  `book_id` int(5) NOT NULL,
  `borrow_details_status` enum('PINJAM','KEMBALI') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `borrow_details`
--

INSERT INTO `borrow_details` (`borrow_id`, `book_id`, `borrow_details_status`) VALUES
(1, 1, 'PINJAM'),
(1, 1, 'PINJAM'),
(7, 1, 'KEMBALI'),
(7, 2, 'KEMBALI'),
(8, 1, 'PINJAM'),
(8, 2, 'PINJAM'),
(9, 1, 'PINJAM'),
(9, 2, 'PINJAM'),
(10, 1, 'PINJAM'),
(10, 2, 'PINJAM'),
(11, 1, 'KEMBALI'),
(11, 2, 'KEMBALI');

-- --------------------------------------------------------

--
-- Struktur dari tabel `member`
--

CREATE TABLE `member` (
  `id_member` int(5) NOT NULL,
  `member_name` varchar(255) NOT NULL,
  `member_address` text NOT NULL,
  `member_gender` enum('Male','Female') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `member`
--

INSERT INTO `member` (`id_member`, `member_name`, `member_address`, `member_gender`) VALUES
(1, 'Roni', 'Kp. Bubulak 3 Lintang utara kejora 04/05', 'Male'),
(2, 'Dina', 'Jl. Sukasari 3 no 47', 'Female'),
(6, 'Budi', 'llllooopppeeee', 'Male'),
(7, 'asdf', 'sadasdadssaddsasad', 'Male');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`user_id`);

--
-- Indeks untuk tabel `books`
--
ALTER TABLE `books`
  ADD PRIMARY KEY (`book_id`);

--
-- Indeks untuk tabel `borrowing`
--
ALTER TABLE `borrowing`
  ADD PRIMARY KEY (`borrow_id`);

--
-- Indeks untuk tabel `member`
--
ALTER TABLE `member`
  ADD PRIMARY KEY (`id_member`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `admin`
--
ALTER TABLE `admin`
  MODIFY `user_id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT untuk tabel `books`
--
ALTER TABLE `books`
  MODIFY `book_id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT untuk tabel `borrowing`
--
ALTER TABLE `borrowing`
  MODIFY `borrow_id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT untuk tabel `member`
--
ALTER TABLE `member`
  MODIFY `id_member` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
