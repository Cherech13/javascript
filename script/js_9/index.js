//1
class Circle {
    constructor(r) {
        this.r = r
    }
    get radius() {
        return this.r;
    }
    set radius(r) {
        this.r = r;
    }
    get d () {
        return this.r * 2;
    }
    area() {
        return('area cercle = ', Math.PI * Math.pow(this.r, 2));
    }
    circle_length() {
        return ('circle lengtth =', Math.PI * this.r * 2);
    }
}

let myCircle = new Circle(20);
console.log(myCircle.radius);
console.log(myCircle.d); 
console.log(myCircle.area());
console.log(myCircle.circle_length());

//2.

class Marker {
    constructor(clr, ink) {
        this.clr = clr;
        this.ink = ink;
    }
    get props() {
        return [this.clr, this.ink];
    }
    set props (newproper) {
        [this.clr, this.ink] = [...newproper];
    }
    write(line) {
        let t = document.getElementById("content");
        for (let i = 0; i < line.length; i++) {
            if (this.ink != 0) {
                if (line[i] == "  ") {
                    this.ink += 0.5;
                }
                t.innerHTML += line[i];
                t.style.color = this.clr;
                this.ink -= 0.5;
            } else {
                document.write('Marker is over');
                break;
            }   
        }
    }
}

class RefuelingMarker extends Marker {
    fill (ink) {
        if (ink > 100) {
            ink = 100;
        } else {
            this.ink += ink;
        }
    }
}

let mymarker = new RefuelingMarker("red", 15);
mymarker.fill(26);
const x = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident harum dolores numquam ullam, quo nihil quae repudiandae`;
mymarker.write(x);

