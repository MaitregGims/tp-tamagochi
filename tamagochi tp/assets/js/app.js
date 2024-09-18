let img = document.querySelectorAll('img')
let Petname = document.querySelector('.name')
let petName;
let btn = document.querySelector('.choose')
let pet;
let choosePet = document.querySelector('.choose-pet')
let form = document.querySelector('.actions')
let playimg = document.querySelector('.play-img')
let hungerui = document.querySelector('#faim')
let busynesui = document.querySelector('#fatigue')
let hapinesui = document.querySelector('#humeur')
let playScreen = document.querySelector('.play')
let looseScreen = document.querySelector('.loose-screen')
let whyLoose = document.querySelector('.why')
let loading = document.querySelector('.loading-screen')
let joieIndic = document.querySelector('.joie-nb')
let hungerIndic = document.querySelector('.faim-nb')
let fatigueIndic = document.querySelector('.fatigue-nb')
let petInteractions = document.querySelector('#interaction');
let petFeed = document.querySelector('#nouriture');
let petActivities = document.querySelector('#activité');
let dialogues = document.querySelector('.dialogues-text');
let surrender = document.querySelector('#surrender')


img.forEach((imgs) => {
    imgs.addEventListener('click', () => {
        img.forEach((imgs) => imgs.classList.remove("selected"))
        imgs.classList.add('selected');
        Petname.textContent = imgs.id + " ?"
        petName = imgs.id
    })
})

function PetsCreator(hapiness, hunger, fatigue, idName) {
    this.name = idName
    this.hapines = hapiness
    this.hungry = hunger
    this.busy = fatigue
    this.hapinesLimit = hapiness
    this.hungryLimit = hunger

    this.needFood = () => {
        this.hungry--
        if (this.hungry <= -1) {
            this.hungry++;
        }
        if (this.hungry >= 26) {
            playimg.src = "./assets/img/" + this.name + ".jpg"
        }
        hungerui.style.width = this.hungry + "%"
        hungerIndic.textContent = pet.hungry + "%";
        console.log(this.hungry)
        this.isHangry();
    }

    this.surrender = () => {
        this.hungry = 0
        this.hapines = 0
        this.busy = 100
        this.loose();
    }

    this.happyness = () => {
        this.hapines--
        if (this.hapines <= -1) {
            this.hapines++;
        }
        if (this.hapines >= 26) {
            playimg.src = "./assets/img/" + this.name + ".jpg"
        }
        hapinesui.style.width = this.hapines + "%"
        joieIndic.textContent = pet.hapines + "%";
        this.isHangry();
    }

    this.fatigue = () => {
        this.busy++
        if (this.busy >= 101) {
            this.busy--;
        }
        if (this.fatigue <= 75) {
            playimg.src = "./assets/img/" + this.name + ".jpg"
        }
        busynesui.style.width = this.busy + "%"
        fatigueIndic.textContent = pet.busy + "%";
        this.isHangry();
    }

    this.isHangry = () => {
        if (this.name == "sherry" && this.hungry <= 25) {
            this.reallyAngry();
        } else if (this.name == "shanny" && this.hungry <= 25) {
            this.reallyAngry();
        } else if (this.name == "phillibert" && this.hungry <= 25) {
            playimg.src = "./assets/img/hangry-" + this.name + ".jpg"
            this.reallyAngry();
        } else if (this.name == "samba" && this.hungry <= 25) {
            playimg.src = "./assets/img/hangry-" + this.name + ".jpg"
            this.reallyAngry();
        }

        if (this.name == "sherry" && this.hapines <= 25) {
            this.reallyAngry();
        } else if (this.name == "shanny" && this.hapines <= 25) {
            this.reallyAngry();
        } else if (this.name == "phillibert" && this.hapines <= 25) {
            playimg.src = "./assets/img/hangry-" + this.name + ".jpg"
            this.reallyAngry();
        } else if (this.name == "samba" && this.hapines <= 25) {
            playimg.src = "./assets/img/hangry-" + this.name + ".jpg"
            this.reallyAngry();
        }

        if (this.name == "sherry" && this.busy >= 65) {
            this.reallyAngry();
        } else if (this.name == "shanny" && this.busy >= 65) {
            this.reallyAngry();
        } else if (this.name == "phillibert" && this.busy >= 65) {
            playimg.src = "./assets/img/hangry-" + this.name + ".jpg"
            this.reallyAngry();
        } else if (this.name == "samba" && this.busy >= 65) {
            playimg.src = "./assets/img/hangry-" + this.name + ".jpg"
            this.reallyAngry();
        }

        // re set normal
    }

    this.reallyAngry = () => {
        if (this.hungry >= 10) {
            playimg.classList.remove('trembler')
            this.loose();
        }

        if (this.hapines >= 10) {
            playimg.classList.remove('trembler')
            this.loose();
        }

        if (this.busy <= 85) {
            playimg.classList.remove('trembler')
            this.loose();
        }

        if (this.hungry <= 10) {
            playimg.classList.add('trembler')
            this.loose();
        }

        if (this.hapines <= 10) {
            playimg.classList.add('trembler')
            this.loose();
        }

        if (this.busy >= 85) {
            playimg.classList.add('trembler')
            this.loose();
        }

    }

    this.activitiesEvent = function (actions) {
        if (actions == "calin") {
            this.hapines += 10
            if (this.hapines >= this.hapinesLimit) {
                this.hapines = this.hapinesLimit
                console.log('limit reach')
            }
            hapinesui.style.width = this.hapines + "%"
            joieIndic.textContent = pet.hapines + "%";
        } else if (actions == "caresse") {
            this.hapines += 12
            if (this.hapines >= this.hapinesLimit) {
                this.hapines = this.hapinesLimit
                console.log('limit reach')
            }
            hapinesui.style.width = this.hapines + "%"
            joieIndic.textContent = pet.hapines + "%";
        } else if (actions == "jouer") {
            this.hapines += 35
            if (this.hapines >= this.hapinesLimit) {
                this.hapines = this.hapinesLimit
                console.log('limit reach')
            }
            this.busy += 30
            busynesui.style.width = this.busy + "%"
            fatigueIndic.textContent = pet.busy + "%";
            hapinesui.style.width = this.hapines + "%"
            joieIndic.textContent = pet.hapines + "%";
        } else {
            alert('choose something')
        }
    }

    this.foodEvent = (actions) => {
        if (actions == "croquette") {
            this.petsLikeFood(actions)
        } else if (actions == "paté") {
            this.petsLikeFood(actions)
        } else if (actions == "graines") {
            this.petsLikeFood(actions)
        } else if (actions == "friandise") {
            this.petsLikeFood(actions)
        } else if (actions == "graines") {
            this.petsLikeFood(actions)
        } else if (actions == "???") {
            this.petsLikeFood(actions)
        } else {
            alert('please choose food');
        }
    }

    this.intercationsEvent = (actions) => {
        if (actions == "promenade") {
            this.busy += 20
            if (this.busy >= 100) this.busy = 100;
            busynesui.style.width = this.busy + "%"
            fatigueIndic.textContent = pet.busy + "%";
            this.petActivities(actions)
        } else if (actions == "voler") {
            this.petActivities(actions)
        } else if (actions == "dormir") {
            this.petActivities(actions)
            this.busy -= 20
            if (this.busy <= 0) this.busy = 0;
            busynesui.style.width = this.busy + "%"
            fatigueIndic.textContent = pet.busy + "%";
        } else {
            alert('please choose action.');
        }
    }

    this.petsLikeFood = (verif) => {
        console.log(verif)
        let foodarr;
        let actionsarr;
        if (this.name == "sherry") {
            foodarr = ["paté", "friandise", "croquette"]
            actionsarr = ["promenade", "dormir"]
        } else if (this.name == "shanny") {
            foodarr = ["paté", "friandise", "croquette"]
            actionsarr = ["promenade", "dormir"]
        } else if (this.name == "phillibert") {
            foodarr = ["graines", "friandise", '???']
            actionsarr = ["voler", "dormir"]
        } else if (this.name == "samba") {
            foodarr = ["paté", "friandise", "croquette"]
            actionsarr = ["promenade", "dormir"]
        }


        if (foodarr.includes(verif)) {
            dialogues.textContent = this.name + " a adorer : " + verif;
            this.hungry += 20
            if (this.hungry > this.hungryLimit) this.hungry = this.hungryLimit;
        } else {
            dialogues.textContent = this.name + " n'a pas aimé : " + verif;
            this.hungry -= 15
            this.hapines -= 20
            if (this.hapines <= 0) this.hapines = 0;
            if (this.hungry <= 0) this.hungry = 0;
        }

        
        hapinesui.style.width = this.hapines + "%"
        hungerui.style.width = this.hungry + "%"
        hungerIndic.textContent = this.hungry + "%";
        joieIndic.textContent = this.hapines + "%";
    }

    this.petActivities = (verif) => {
        let actionsarr;
        if (this.name == "sherry") {
            actionsarr = ["promenade", "dormir"]
        } else if (this.name == "shanny") {
            actionsarr = ["promenade", "dormir"]
        } else if (this.name == "phillibert") {
            actionsarr = ["voler", "dormir"]
        } else if (this.name == "samba") {
            actionsarr = ["promenade", "dormir"]
        }

        if (actionsarr.includes(verif)) {
            dialogues.textContent = this.name + " a adorer : " + verif;
            this.hapines += 20
            if (this.hapines > this.hapinesLimit) this.hapines = this.hapinesLimit;
        } else {
            dialogues.textContent = this.name + " n'est pas capable de : " + verif;
            this.hapines -= 20
            if (this.hapines <= 0) this.hapines = 0;
        }

        hapinesui.style.width = this.hapines + "%"
        joieIndic.textContent = pet.hapines + "%";
    }

    this.loose = () => {
        if (this.busy >= 100 && this.hapines <= 0 && this.hungry <= 0) {
            playScreen.classList.add("hidden")
            looseScreen.classList.remove("hidden")
            whyLoose.textContent = this.name + " dont like you anymore."
        }
    }

    hungerui.style.width = this.hungry + "%"
    hapinesui.style.width = this.hapines + "%"
    busynesui.style.width = this.busy + "%"
}

form.addEventListener('submit', (y) => {
    y.preventDefault()
    if (petName == "sherry") {
        pet = new PetsCreator(200, 100, 0, petName)
        console.log(pet)
    } else if (petName == "shanny") {
        pet = new PetsCreator(100, 150, 0, petName)
        console.log(pet)
    } else if (petName == "phillibert") {
        pet = new PetsCreator(100, 80, 0, petName)
        console.log(pet)
    } else if (petName == "samba") {
        pet = new PetsCreator(80, 50, 0, petName)
        console.log(pet)
    } else {
        alert('choose a pet.')
        return null
    }


    loading.classList.remove('hidden')
    choosePet.classList.add('hidden')

    setTimeout(() => {
        loading.classList.add('hidden')
        playScreen.classList.remove('hidden')
        playimg.id = petName
        playimg.src = "./assets/img/" + petName + ".jpg"
        choosePet.remove();
        fatigueIndic.textContent = pet.busy + "%";
        hungerIndic.textContent = pet.hungry + "%";
        joieIndic.textContent = pet.hapines + "%";
        hungerissue = setInterval(pet.needFood, 1500);
        isbusy = setInterval(pet.fatigue, 3000);
        ishappy = setInterval(pet.happyness, 5000);
    }, 5000);

})


petInteractions.addEventListener('submit', (y) => {
    y.preventDefault();
    let selectValue = document.querySelector('#pet-interact').value
    console.log(selectValue)
    pet.activitiesEvent(selectValue)
})

petFeed.addEventListener('submit', (y) => {
    y.preventDefault();
    let selectValue = document.querySelector('#pet-food').value
    console.log(selectValue)
    pet.foodEvent(selectValue)
})

petActivities.addEventListener('submit', (y) => {
    y.preventDefault();
    let selectValue = document.querySelector('#pet-activities').value
    console.log(selectValue)
    pet.intercationsEvent(selectValue)
})

surrender.addEventListener('click', () => {
    pet.surrender();
})