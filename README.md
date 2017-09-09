# Cherrypy-webpack boilerplate
The goal of this project is to give a jumping off point for a full stack application using cherrypy and webpack.

### Getting Started
Install python dependencies.
`pip install -r requirements.txt`

Install node dependencies.
`npm install`
Note: At the end of installation, `npm outdated` is run to list any outdated packages.
This should will give you a heads up to know if you need to modify the package.json at all.

### Development
`npm run start`
This command will start the cherrypy server, build and watch webpack.
`npm run lint`
This will lint all all html, js, scss, and py files.

### Production
`npm run startProduction`
This command starts the cherrypy server and builds webpack using the production config.

### License
2017 Visgence Inc.

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>