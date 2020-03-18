class betterButton {
  constructor(x,y,w,h,fun,args) {
    this.button = createButton();
    this.button = createButton("test");
    this.button.position(5,5);
    this.button.size(40,40);
    this.button.style("color","Transparent")
    this.button.style("background-color","Transparent")
    this.button.style("border", "none");
    this.button.style("outline", "none");
    this.button.mousePressed(() => {
      fun(args)
    });
  }

  remove(){
    this.button.remove();
  }
}
