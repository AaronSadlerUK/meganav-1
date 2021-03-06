# Change Log
All notable changes to this project will be documented in this file.

## [8.2.3] - 2021-03-31
### Fixed
* Fixed issue where a null exception would happen if the content item is removed

## [8.2.2] - 2021-02-08
### Fixed
* Fixed issue where the incorrect culture variant was returned

## [8.2.1] - 2020-11-23
### Fixed
* Fixed issue where undefined is added to the url in the backoffice

## [8.2.0] - 2020-11-23
### Fixed
* Expand / Collapse buttons are now hidden if MegaNavV8 is configured to 1 level
* Expand / Collapse buttons now work recursively
* You can now set anchor links for Nodes as well as external links
* Now supports node ids when migrated from Umbraco 7
* Updated the angularjs controller name to match the project name

### Improved
* The dragging of menu items within the backoffice is requires more of a drag before changing levels

### Added
* Added the ability to disable Umbraco Cloud Sync either fully or partially
* Umbraco package is now generated using UmbPack

## [8.1.2] - 2020-10-14
### Fixed
Fixed issue where a new mega nav requires as string, but an object is passed. - Pull Request #13, Thanks auroris!

## [8.1.1] - 2020-10-02
### Fixed
Included correct DLLs

## [8.1.0] - 2020-10-02
### Breaking Changes
* Updated namespaces to align with current project name
* Updated the project alias to align with the current project name

```diff
+ Once this version is installed, you will need to edit the document type, and re-select the property editor.
+ Do not delete the property, just edit and then re-select MegaNavV8 from the property editor selection window.
```

## [8.0.15] - 2020-08-30
### Added
* Added language variant support

## [8.0.14] - 2020-06-26
### Changed
* Changed converter to retrieve most recent url from cache

## [8.0.13] - 2020-06-26
### Fixed
* Fixed exception caused by incorrect type in value converter

## [8.0.12] - 2020-06-22
### Added
* Ability to collapse / expand tree children, the is stored and it will remember on page refresh / reload
* Ability to deploy dependent nodes when using Umbraco Deploy

### Changed
* Refactored slightly

### Fixed
* Fixed some incorrect namespacing

## [8.0.11] - 2020-06-18
### Changed
* Updated angular-ui-tree to v2.22.5

### Fixed
* Fixed issue where dragging would break when not in debug mode

## [8.0.10] - 2020-06-08
### Changed
* Corrected included Api DLL

## [8.0.9] - 2020-06-03
### Changed
* Split plugin api controller into seperate project

## [8.0.5] - 2020-06-03
### Changed
* Split into projects / packages, MegaNavV8.Core and MegaNavV8.Web, this now has 2 separate NuGet packages

## [8.0.1] - 2020-06-03
### Changed
* Changed dependencies from UmbracoCms to UmbracoCms.Web and UmbracoCms.Core

## [8.0.0] - 2020-05-31
### Added
* Umbraco V8 support - Added in V2.0.0 by Callum Whyte
* Added support for querystrings / anchors

### Changed
* Renamed to MegaNavV8 to be separate from the original MegaNav plugin

### Fixed
* Changed to use UDI instead of ID to work with Umbraco Cloud Deploy

## [1.1.2] - 2018-20-08
### Fixed
* Nav item settings dialog not functioning in Umbraco v7.12

## [1.1.1] - 2018-17-01
### Fixed
* Exception thrown when trying to render an empty Meganav

## [1.1.0] - 2017-23-07
### Added
* Support for UmbracoNaviHide on content items
* Handling legacy icons returned by Umbraco APIs
* Required field validation to nav item settings
* This CHANGELOG file
* AppVeyor configuration to allow for automated builds and tests
* Project version number to package.json for automated builds

### Changed
* Re-targeting package to Umbraco 7.4+
* Replaced Umbraco Link Picker with custom Umbraco UI overlay to allow for further customisation
* Updated documentation to reflect UmbracoNaviHide support

### Fixed
* Node names not updating after save
* Legacy node icons rendering incorrectly
* Changes persisting after editing a nav item then cancelling the changes
* Duplicate files in NuGet package

## [1.0.1] - 2017-10-03
### Added
* Nuspec file to allow for publishing to NuGet.org
* Assembly descriptions on the project DLLs

### Fixed
* Fix issues with NuGet packaging

## [1.0.0] - 2017-01-03
### Added
* Initial release of Meganav for Umbraco 7.5
* Build scripts
* README file with information about the project and screenshots
* MIT license in the form of a LICENSE.md file

[Unreleased]: https://github.com/thecogworks/meganav/compare/v1.1.2...HEAD
[1.1.2]: https://github.com/thecogworks/meganav/compare/v1.1.1...v1.1.2
[1.1.1]: https://github.com/thecogworks/meganav/compare/v1.1.0...v1.1.1
[1.1.0]: https://github.com/thecogworks/meganav/compare/v1.0.1...v1.1.0
[1.0.1]: https://github.com/thecogworks/meganav/compare/v1.0.0...v1.0.1
