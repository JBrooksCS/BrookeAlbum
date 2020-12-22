import { render } from "@testing-library/react";
import React, { Component } from "react";
import All_Images from "./images/ImageList"



class Photos extends Component{
  
    state = {
        totalPhotos : 120
    }

    getRandomInt(max) {
        
        var num = Math.floor(Math.random() * Math.floor(max))
        if (num === 0)
        {
            num = 1;
        }
        return num;
      }

    render(){
        
        var imageObject = All_Images[this.getRandomInt(this.state.totalPhotos)]
        var img = imageObject.image
        var date = imageObject.date.substr(0,12)
        var type = img.substr(img.length - 3);
        var isMovie = false;
        if (type === "mov")
        {
            isMovie = true;
        }

        return (
            <>
                {isMovie ?
                    <div class="item">
                   <div class="polaroid">
                       <video 
                       style={{maxWidth: "100%"}}
                       type="video/mov" controls>
                        <source src={img}>
                        </source>
                       </video>
                <div class="caption">{date}</div>
                </div>
                </div>
                :
               <div class="item">
                   <div class="polaroid"><img src = {img} ></img>
                    <div class="caption">{date}</div>
                </div>
                </div>
    }
                
            </>
        );
    }

}

export default Photos;