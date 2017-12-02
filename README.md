# 3JS - 3D space

### Contents

* [Overview](#overview)
* [Tech stack](#tech-stack)
* [Description](#description)




## Overview

**3JS** is a 3D rendering of the Earth and the Moon. I developed this project during my participation on SPICED Academy (Berlin), a 12-week coding bootcamp focused on full stack JavaScript web development.

The goal of the project was to learn how to ThreeJS, a javascript library that allows creating and rendering 3D shapes directly in the browser.

**Time frame:** 1 day



## Tech stack:

- **Frontend**: ThreeJS

  ​


## Description

The application renders a 3D representation of the Earth and the Moon. These are 3D spherical meshes covered with a textured skin representing the Earth lands and oceans, as well as the Moon craters.

The user can rotate the camera around the Earth by clicking and drawing the cursor. Additionally, scrolling up and down it is possible to adjust the distance of the camera from the Earth.

![environment](https://github.com/Raulif/3JS/blob/master/3JS/public/environment.gif)



Using the control panel on the top-right corner, it is possible to adjust the speed of the rotation of the Earth and Moon, both on their X and Y axis, imitating the real movement of celestial bodies.

![rotation](https://github.com/Raulif/3JS/blob/master/3JS/public/rotation.gif)



Lastly, the user can set the translation movement of the Moon around the Earth. The controls allow adjusting the speed of the rotation on the X and Y axis. If the camera is too close to the Earth, the Moon will move outside of the scope of view.

![translation](https://github.com/Raulif/3JS/blob/master/3JS/public/translation.gif)