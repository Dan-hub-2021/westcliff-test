

Vue.component('mycomponent1', {
    template: '<header><span>Food Blog</span></header>'
});

Vue.component('mycomponent2', {
    template: '<h2>Comments</h2>'
});

var app = new Vue({
el: "#container",
data: {
    image:'profile.png',
        name: "Brianna - ",
        FoodieLevel: "Foodie Level: Novice",
        Bio: " Bio: Food enthusiast. Love to cook and experiment. Into only organic, fat free, sugar free stuffs!",
        obj1: {
            author : "Brianna",
            date : "February 18, 2021 @ 3:30 pm",
            comment : "Was amazing! My Walmart didn’t have coriander in stock and didn’t have ground cumin. I used serrano instead of jalapeño. It was just like my favorite tortilla soup from BJs. I am sending this recipe to my family. I want everyone to try it!",
        }, 

        name2: "LINH - ",
        FoodieLevel2: "Foodie Level: Newcomer",
        Bio2: " Bio: Love food! Grew up with meat and potatoes. Recently venture outside my comfort zone. Loving everything I have been eating so far. Thai is my favorite at this time.",
        obj2: {
            author : "LINH",
            date : "February 15, 2021 @ 9:46 am",
            comment : "I just made this soup today and it’s so tasty! didn’t have corn at home but still turned out very good.  It’s a winner!  I made beef chili for my parents; but since my dad has gout he can’t eat beef; this white chicken chili is perfect for him.  Thank you Lisa!",
        },

        name3: "CATHERINE LEONARDO - ",
        FoodieLevel3: "Foodie Level: Mentor",
        Bio3: " Bio: I have to say I never was the adventurous type until 2 years ago. My boyfriend, who is of Japanese background, exposed me to other cultural food and I have never look back since!",
        obj3: {
            author : "CATHERINE LEONARDO",
            date : "February 13, 2021 @ 12:58 pm",
            comment : "I LOVE this White Chicken Chili! You are right, it is satiating meal—delicious with toasted bread. Refreshingly different taste than any chicken chili I’ve made in the past. I made it exactly as written and added some chopped zucchini, carrots, and celery. Instead of shredding the chicken, I chopped it into small pieces. It freezes very well. Will be an all-time favorite, for sure.",
        },
        
        name4: "KALI - ",
        FoodieLevel4: "Foodie Level: Novice",
        Bio4: " Bio: Food is my passion. So is cooking. I love to experiment and try new things. I have to admit I'm a food whore! Invite me over for dinner and I'll be there!",
        obj4: {
            author : "KALI",
            date : "February 13, 2021 @ 11:31 am",
            comment : "This recipe is dynamite! My partner usually won’t eat beans but he finished the whole pot (darn was hoping to have some for leftovers haha). This is crowd-pleaser that I am going to add to my regular recipe rotation. Thanks so much, Lisa!",
        }
   
},
methods:{
    onClick: function () {
        alert(this.name + 
        this.FoodieLevel +
        this.Bio)}
},
methods:{
    onClick: function () {
        alert(this.name2 + 
        this.FoodieLevel2 +
        this.Bio2)}
},
methods:{
    onClick: function () {
        alert(this.name3 + 
        this.FoodieLevel3 +
        this.Bio3)}
},
methods:{
    onClick: function () {
        alert(this.name4 + 
        this.FoodieLevel4 +
        this.Bio4)}
},
})



src="http://vuejs.org/js/vue.js"
