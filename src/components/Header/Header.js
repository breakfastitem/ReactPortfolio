import React from 'react';

function Header(){
    return(
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" href="../../index.html">Andrew Ehrman</a>
        
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-auto">
    
                    <li class="nav-item">
                        <a class="nav-link" href="./">Contact</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="./">Portfolio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="./">About</a>
                    </li>
                </ul>
            </div>
        </nav>);
}


export default Header;