import React from "react";
function Card(){
    return(
        <div class="container">
            <div class="row">
                <div class="col-sm-4">
                    <div class ="card">
                        <div class="card-body">
                            <h5 class="card 1">Card title</h5>
                            <p class="card-text">Card 1 text...</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class ="card">
                        <div class="card-body">
                            <h5 class="card 2">Card title</h5>
                            <p class="card-text">Card 2 text...</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class ="card">
                        <div class="card-body">
                            <h5 class="card 3">Card title</h5>
                            <p class="card-text">Card 3 text...</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
}
export default Card;