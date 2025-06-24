-- 1. Tạo và chọn database
IF DB_ID('DoAnLapTrinhGhiChu1') IS NOT NULL
    DROP DATABASE DoAnLapTrinhGhiChu1;
GO
CREATE DATABASE DoAnLapTrinhGhiChu1;
GO

DROP TABLE IF EXISTS dbo.GhiChu_Nhan;
GO
DROP TABLE IF EXISTS dbo.GhiChu_ChuDe;
GO
DROP TABLE IF EXISTS dbo.GhiChu;
GO
DROP TABLE IF EXISTS dbo.Nhan;
GO
DROP TABLE IF EXISTS dbo.ChuDe;
GO
DROP TABLE IF EXISTS dbo.NguoiDung;
GO


USE DoAnLapTrinhGhiChu1;
GO

-- 2. Bảng Người dùng
CREATE TABLE NguoiDung (
  MaND        INT           NOT NULL PRIMARY KEY,
  TenDN       NVARCHAR(50)  NOT NULL,
  MatKhau     NVARCHAR(100) NOT NULL
);
GO

-- 3. Bảng Ghi chú
CREATE TABLE GhiChu (
  MaGhiChu    INT              NOT NULL PRIMARY KEY,
  MaND        INT              NOT NULL,
  TieuDe      NVARCHAR(200)    NULL,
  NoiDung     NVARCHAR(MAX)    NULL,
  NgayTao     DATETIME         NOT NULL CONSTRAINT DF_GhiChu_NgayTao     DEFAULT GETDATE(),
  NgayCapNhat DATETIME         NOT NULL CONSTRAINT DF_GhiChu_NgayCapNhat DEFAULT GETDATE(),
  CONSTRAINT FK_GhiChu_NguoiDung FOREIGN KEY (MaND) REFERENCES NguoiDung(MaND)
);
GO

-- 4. Bảng Nhãn
CREATE TABLE Nhan (
  MaNhan   INT           NOT NULL PRIMARY KEY,
  TenNhan  NVARCHAR(50)  NOT NULL
);
GO

-- 5. Bảng Chủ đề
CREATE TABLE ChuDe (
  MaChuDe   INT           NOT NULL PRIMARY KEY,
  TenChuDe  NVARCHAR(50)  NOT NULL
);
GO

-- 6. Bảng nối GhiChu ↔ Nhãn
CREATE TABLE GhiChu_Nhan (
  MaGhiChu INT NOT NULL,
  MaNhan   INT NOT NULL,
  CONSTRAINT PK_GhiChu_Nhan PRIMARY KEY (MaGhiChu, MaNhan),
  CONSTRAINT FK_GhiChuNhan_GhiChu FOREIGN KEY (MaGhiChu) REFERENCES GhiChu(MaGhiChu),
  CONSTRAINT FK_GhiChuNhan_Nhan   FOREIGN KEY (MaNhan)   REFERENCES Nhan(MaNhan)
);
GO

-- 7. Bảng nối GhiChu ↔ Chủ đề
CREATE TABLE GhiChu_ChuDe (
  MaGhiChu INT NOT NULL,
  MaChuDe  INT NOT NULL,
  CONSTRAINT PK_GhiChu_ChuDe PRIMARY KEY (MaGhiChu, MaChuDe),
  CONSTRAINT FK_GhiChuChuDe_GhiChu FOREIGN KEY (MaGhiChu) REFERENCES GhiChu(MaGhiChu),
  CONSTRAINT FK_GhiChuChuDe_ChuDe  FOREIGN KEY (MaChuDe)  REFERENCES ChuDe(MaChuDe)
);
GO

-- 8. Dữ liệu mẫu (phải tự chỉ định các khóa)
INSERT INTO NguoiDung (MaND, TenDN, MatKhau) VALUES
  (1, N'duy', N'123456'),
  (2, N'an',  N'password');
GO

INSERT INTO Nhan (MaNhan, TenNhan) VALUES
  (1, N'Công việc'),
  (2, N'Học tập'),
  (3, N'Cá nhân');
GO

INSERT INTO ChuDe (MaChuDe, TenChuDe) VALUES
  (1, N'ReactJS'),
  (2, N'C#');
GO

INSERT INTO GhiChu (MaGhiChu, MaND, TieuDe, NoiDung) VALUES
  (1, 1, N'Học React',   N'– Xem video\n– Làm bài tập'),
  (2, 1, N'Mua đồ ăn',    N'– Bánh mì\n– Sữa\n– Trứng'),
  (3, 2, N'Ôn tập C#',    N'– Generic, LINQ\n– Entity Framework');
GO

INSERT INTO GhiChu_Nhan (MaGhiChu, MaNhan) VALUES
  (1, 2),
  (1, 1),
  (2, 3),
  (3, 2);
GO

INSERT INTO GhiChu_ChuDe (MaGhiChu, MaChuDe) VALUES
  (1, 1),
  (3, 2);    
GO


