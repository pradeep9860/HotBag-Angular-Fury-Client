export class FileInfoDto {
  FileName: string;
  FilePath: string;
  FileAbsPath: string;
  FileDescription: string;
  Size: string;
  LastModifiedDate: string;
  CreatedAt: string;
}

export class FileDirectorySetting {
  Id: string;
  DefaultDirectoryPath: string;
  DirectoryPath: string;
  ArchiveDirectoryPath: string;
}
