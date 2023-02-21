export function show(element){
  element.classList.remove('hide')
  //console.log(element)
}

export function hide(element){
  element.classList.add('hide')
  //console.log(element)
}

/*
//does instantly 
export function scrollToBottom(element) {
  element.scrollTop = element.scrollHeight - element.clientHeight;
}*/

export function scrollToBottom(element) {
  let target = element.scrollHeight - element.clientHeight;
  let start = element.scrollTop;
  let duration = 500; // time in milliseconds
  let startTime = null;
  
  function animate(currentTime) {
    if (!startTime) startTime = currentTime;
    let progress = currentTime - startTime;
    element.scrollTop = easeInOutCubic(progress, start, target - start, duration);
    if (progress < duration) requestAnimationFrame(animate);
  }
  
  function easeInOutCubic(t, b, c, d) {
    t /= d/2;
    if (t < 1) return c/2*t*t*t + b;
    t -= 2;
    return c/2*(t*t*t + 2) + b;
  }
  
  requestAnimationFrame(animate);
}
