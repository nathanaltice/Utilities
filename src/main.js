// Nathan Altice
// Created: 7/9/20
// Phaser 3 Utilities
// dat.gui by Google Data Arts Team: https://github.com/dataarts/dat.gui

// be stricc
'use strict';

// global variables
let cursors;
const SCALE = 0.5;
const tileSize = 35;

// main game object
let config = {
    type: Phaser.WEBGL,
    width: 840,
    height: 525,
    physics: {
        default: 'arcade',
        arcade: {
            debug: true,
            gravity: {
                x: 0,
                y: 0
            }
        }
    },
    scene: [ Jump ]
};

let game = new Phaser.Game(config);