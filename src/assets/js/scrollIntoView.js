
  function scrollIntoViewFunction(value) {
    if (value == "courseInfo") {
        const element = document.getElementById("courseInfo");
        window.scrollTo({
            top: element.offsetTop - 60 - 64,
            behavior: "smooth"
        });

        console.log(element.offsetTop)

    } else if (value == "courseVideoList") {
        const element = document.getElementById("courseVideoList");
        window.scrollTo({
            top: element.offsetTop - 60 - 64,
            behavior: "smooth"
        });

    } else if (value == "courseComment") {
        const element = document.getElementById("courseComment");
        window.scrollTo({
            top: element.offsetTop - 60 - 64,
            behavior: "smooth"
        });
    }
}
