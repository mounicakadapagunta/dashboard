import React from 'react';
import Divider from '@mui/material/Divider';


export function Vertical() {
    const col = { color: "white" };
    return (            //vertical menu bar for medium and large screen
        <div className="vertical">

            <ul class="nav flex-column">
                <li class="nav-item">
                    <a class="nav-link active" href="/" style={col}><i class="fas fa-smile-wink"></i>SB ADMIN</a><Divider />
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/" style={col}><i class="fas fa-tachometer-alt"></i>Dashboard</a><Divider />
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/" style={col}><i class="fas fa-cog"></i>Component</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled" href="/" style={col}><i class="fas fa-wrench"></i>Utilities</a><Divider />
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/" style={col}><i class="fas fa-folder"></i>Pages</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/" style={col}><i class="fas fa-chart-area"></i>Chats</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/" style={col}><i class="fas fa-table"></i>Table</a>
                </li>
            </ul>
        </div>
    );
}