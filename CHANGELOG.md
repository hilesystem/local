# Changelog

---

## [1.1.0] - 2023-07-25

### Added

- `getLinkStatus` - Get file status unless `path` refers to a symbolic link.

### Dependencies

- Removed `@await-of/of` dependency.

### Requirements

- Minimal required Node.js version is now `16.17.0`.

- Removed `browser` module support.

---

## [1.0.2] - 2023-05-12

### Changed

- `dirIsEmpty` now returns throw error when path is not a directory or is not readable.

---

## [1.0.1] - 2023-04-24

### Added

- Added `writeFileTail` function to write strin to the end of a file. Extremely useful for logging.

---

## [1.0.0] - 2023-04-20

- Initial release 🍾🥂

---

The format is based on [Keep a Changelog](https://keepachangelog.com/), and this project adheres to [Semantic Versioning](https://semver.org/).
