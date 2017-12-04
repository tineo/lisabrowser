import '../assets/css/App.css';
import React, { Component } from 'react';

const {dialog} = require('electron').remote;

var d3 = require("d3");
const fs = require("fs");

const floydWarshall = require('../ds/graphs/shortest-path/floyd-warshall').floydWarshall;

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            width : 960,
            height : 500,
            texto: ""
        };
    }

    componentDidMount() {
        console.log('GrandChild did mount.');

    }


    onclicked() {
        console.log("325")



        console.log(floydWarshall);
        var distMatrix =
            [[Infinity, 7,        9,       Infinity,  Infinity, 16],
                [7,        Infinity, 10,       15,       Infinity, Infinity],
                [9,        10,       Infinity, 11,       Infinity, 2],
                [Infinity, 15,       11,       Infinity, 6,        Infinity],
                [Infinity, Infinity, Infinity, 6,        Infinity, 9],
                [16,       Infinity, 2,        Infinity, 9,        Infinity]];

// [ [ 0, 7, 9, 20, 20, 11 ],
//   [ 7, 0, 10, 15, 21, 12 ],
//   [ 9, 10, 0, 11, 11, 2 ],
//   [ 20, 15, 11, 0, 6, 13 ],
//   [ 20, 21, 11, 6, 0, 9 ],
//   [ 11, 12, 2, 13, 9, 0 ] ]
        var shortestDists = floydWarshall(distMatrix);


        /*var arch = dialog.showOpenDialog({
            properties: ['openFile'
                //'openDirectory',
                //'multiSelections'
            ],
            filters: [
                {name: 'HTML', extensions: ['html']}
            ]},
            function (file) {
                console.log(file[0])
                // Asynchronous read
                fs.readFile(file[0], function (err, data) {
                    if (err) {
                        return console.error(err);
                    }
                    //console.log("Asynchronous read: " + data.toString());
                    var someText =  data.toString();
                    someText = someText.replace(/(\r\n|\n|\r)/gm,"");
                    console.log(someText);

                    document.querySelector("#inframe").innerHTML = "<div>eqwe</div>";



                });
            })*/
    }

    onTipeo(event) {
        console.log(event.target.value)
        this.setState({ texto: event.target.value });

    }



    render() {
        return (
            <div id="contenedor">
                <h1>Hello, Electron!</h1>
                <p>I hope you enjoy using basic-electron-react-boilerplate to start your dev off right!</p>
                <p>{ this.state.texto }</p>
                <input text="text" onChange={this.onTipeo.bind(this)}/>
                <button onClick={this.onclicked}>Aceptar</button>

                <div id="inframe"></div>
            </div>
        );
    }

}

export default App;
