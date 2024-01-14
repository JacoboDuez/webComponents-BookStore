class Book extends HTMLElement{
    constructor(){
        super();
    }
    set book(book){
        this.innerHTML = `
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    
                    <img src=${book.imageSource} class="d-block w-100" alt="...">
                    
                    <div class="card-body" id="cardColor">
                            <p class="card-text">
                                <table class="table">
                                    <tr>
                                        <td class="text-success font-weight-bold">Title:</td>
                                        <td>${book.title}</td>
                                    </tr>
                                    <tr>
                                        <td class="text-success font-weight-bold">Subtitle:</td>
                                        <td>${book.subtitle}</td>
                                    </tr>
                                    <tr>
                                        <td class="text-success font-weight-bold">Author:</td>
                                        <td>${book.author}</td>
                                    </tr>
                                    <tr>
                                        <td class="text-success font-weight-bold">Description:</td>
                                        <td>${book.description}</td>
                                    </tr>
                                </table>
                            </p>
                            <a href="${book.bookStore}" target="blank" class="btn btn-primary">Get best Prices</a>
                            </div>

            </div>
            <div class="carousel-item">
            <img src="..." class="d-block w-100" alt="...">
            </div>
        </div>
</div>`;
    }       
    }

customElements.define('mit-book',Book);