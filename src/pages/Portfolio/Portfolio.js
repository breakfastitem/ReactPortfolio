import React from "react";
import "./styles.css"

function Portfolio(){
    return(<div class="container">
    <section class="infoBox">
        <div class="row infoBox-row">
            <div class="col-12">
                <h2>Portfolio</h2>
                <hr/>
            </div>
        </div>
       
        <div class="row infoBox-row">
            <div class="col-12">
                <div class="portfolio-image">
                    <div class="row">
                        <div class="col-lg-4">
                            <img src="../img/MovieChat.JPG" alt="web app Screenshot"/>
                        </div>
                        <div class="col-lg-7">
                            <h3>Description</h3>
    
                            <p> Have you ever wanted a social media that allows you to organize movie watch parties
                                with others? Well your in luck with movieChat this is now possible.
    
                                This repository contains a full stack web app That communicates with a database, and
                                is designed around the Model,View, Controller philosophy. A user can organize view
                                parties around certain movies, and chat with other viewers in view party room. This
                                webapp uses socket.io to create a live chat room. The following images are screen
                                shots showcasing the technology.</p>
    
                            <h3>Links</h3>
    
                            <a href="https://github.com/breakfastitem/MovieChat">Github Repository</a>
                            <br/>
    
                            <a href="https://stark-taiga-85419.herokuapp.com/">Deployed Page</a>
                        </div>
                    </div>
                </div>
                <div class="portfolio-image">
                    <div class="row">
                        <div class="col-lg-4">
                            <img src="../img/UrImage.png" alt="Screenshot of Movie ."/>
                        </div>
                        <div class="col-lg-7">
                            <h3>Description</h3>
                            <p> This is project is an implementation of the Royal Game Of Ur the oldest known board
                                game
                                dating back to mesopotamia https://en.wikipedia.org/wiki/Royal_Game_of_Ur. This was
                                accomplished with the unity engine and c# scripts to manipulate the game objects.
                                This
                                project was created mainly to learn how to use the Unity Engine. </p>

                            <h3>Links</h3>

                            <a href="https://github.com/breakfastitem/RoyalGameUnity">Github Repository</a>
                        </div>
                    </div>
                </div>
                <div class="portfolio-image">
                    <div class="row">
                        <div class="col-lg-4">
                            <img src="../img/watchOrRead.png" alt="web app Screenshot"/>
                        </div>
                        <div class="col-lg-7">
                            <h3>Description</h3>
                            <p> The desired purpose of this deployed application, named "Watch or Read", is to
                                provide valuable information to those deciding whether to watch the movie, read the
                                adapted book, or both. The information provided to the user includes movie and book
                                descriptions, along with ratings that will assist the user in determining what to
                                watch and/or read.</p>

                            <h3>Links</h3>

                            <a href="https://github.com/breakfastitem/WatchOrRead">Github Repository</a>
                            <br/>

                            <a href="https://breakfastitem.github.io/WatchOrRead/">Deployed Page</a>
                        </div>
                    </div>
                </div>
                <div class="portfolio-image">
                    <div class="row">
                        <div class="col-lg-4">
                            <img src="../img/Dashboard.jpg" alt="web app Screenshot"/>
                        </div>
                        <div class="col-lg-7">
                            <h3>Description</h3>
                            <p> This web app pull data from open weather AI and displays the data. The user can
                                search for a city and retrieve the weather data for that city. The search history is
                                a button panel along the user to access previusly searched location. If a valid
                                location is not found the search query is not added to the search history.</p>

                            <h3>Links</h3>

                            <a href="https://github.com/breakfastitem/WeatherDashboard">Github Repository</a>
                            <br/>

                            <a href="https://breakfastitem.github.io/WeatherDashboard/">Deployed Page</a>
                        </div>
                    </div>
                </div>
                <div class="portfolio-image">
                    <div class="row">
                        <div class="col-lg-4">
                            <img src="../img/startScreen.jpg" alt="web app Screenshot"/>
                        </div>
                        <div class="col-lg-7">
                            <h3>Description</h3>
                            <p> This web app is a java script code quiz. When the user hits the start button they
                                have 75 seconds to answer 5 Java Script questions. At the end of the quiz the user
                                recives a score based on the number of question answered correctly and the time
                                remaining. The user can then input there initials and add themselves to a local
                                score board. This score board sorts scores from highest to lowest. This project
                                required usage of documnent methods to create the dynamic html content.</p>

                            <h3>Links</h3>

                            <a href="https://github.com/breakfastitem/CodeQuiz">Github Repository</a>
                            <br/>

                            <a href="https://breakfastitem.github.io/CodeQuiz/">Deployed Page</a>
                        </div>
                    </div>
                </div>


            </div>
        </div>


    </section>
</div>);
}

export default Portfolio;