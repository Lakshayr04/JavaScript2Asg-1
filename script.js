/*
    Assignment 05
*/

$(document).ready(function () {
    // your code here

    class ContentItem{
        constructor(id, name, description, genre){
            this.id = id;
            this.name = name;
            this.description = description;
            this.genre = genre;
        }

        updateContentItem(id, name, description, genre){
            if (this.id !== id && !name && !description && !genre){
                return;
            } else {
                this.name = name;
                this.description = description;
                this.genre = genre;
            }
        }

        toString(){
            const nameEl = document.createElement('h2');
            nameEl.textContent = this.name;
            
            const desEl = document.createElement('p');
            desEl.textContent = this.description;
            
            const catEl = document.createElement('div');
            catEl.textContent = this.genre;

            const wrapperEl = document.createElement('div');
            wrapperEl.classList.add('content-item-wrapper');
            wrapperEl.id = `content-item-${this.id}`;
            wrapperEl.append(nameEl, desEl, catEl);  
            
            return wrapperEl;
        }
    }

    const car1 = new ContentItem(1, 'BMW', 'BMW currently assembles its lineup into 10 distinct groupings.', 'Electric');

    const car2 = new ContentItem(2, 'Honda Amaze', 'The Amaze Trend pairs this engine with a 5-speed manual transmission while the Amaze Comfort gains a Continuously Variable Transmission (CVT) with shift paddle mounted behind the steering wheel.', 'CVT');
    
    const car3 = new ContentItem(3, 'Toyota Fortuner', 'he new Fortuner boasts of a power-packed 6-speed Diesel and Petrol AT as well as MT engine capable of turning mountains into molehills.', 'AT & MT engine');

    const car4 = new ContentItem(4, 'Mercedes', 'Mercedes including AMG C43 and C63 versions of the new C-class, a redesigned GLC, and additional EQ electric models.', 'AMG C43');

    const car5 = new ContentItem(5, 'Toyota Corolla', 'The Toyota Corolla is a series of compact cars manufactured and marketed globally by the Japanese automaker Toyota Motor Corporation. ', 'SE, XSE, and XLE');

    const automobile = [car1, car2, car3, car4, car5];

    automobile.forEach(car => {
        $('div#content-item-list').append(car.toString());
    });

    $('.content-item-wrapper').css({
        'border' : '1px solid blue',
        'width' : '65%',
        'padding' : '3px 6px',
        'margin' : '3px auto'
    })

});


