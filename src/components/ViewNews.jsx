import React, { useState } from 'react'

const ViewNews = () => {

    const [news, changeNews] = useState()





    return (
        <div>


            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="row">


                            {news.articles.map(
                                (value, index) => {

                                    return <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">

                                        <div class="card">
                                            <img src={value.urlToImage} class="card-img-top" alt="..."></img>
                                            <div class="card-body">
                                                <h5 class="card-title">{value.author}</h5>
                                                <p class="card-text">{value.title}</p>
                                               
                                                <a href="#" class="btn btn-primary">Read More</a>
                                            </div>
                                        </div>


                                    </div>

                                }
                            )}


                            

                        </div>


                    </div>
                </div>
            </div>





        </div>
    )
}

export default ViewNews