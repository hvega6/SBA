function showSkillsChart() {
    document.getElementById('skillsChart').style.display = 'block';
    
    const ctx = document.getElementById('myChart').getContext('2d');
    new Chart(ctx, {
        type: 'scatter',
        data: {
            datasets: [{
                label: 'Python',
                data: [{ x: 3, y: 80 }],
                backgroundColor: 'rgb(255, 99, 132)'
            }, {
                label: 'JavaScript',
                data: [{ x: 2, y: 70 }],
                backgroundColor: 'rgb(54, 162, 235)'
            }, {
                label: 'Java',
                data: [{ x: 4, y: 75 }],
                backgroundColor: 'rgb(75, 192, 192)'
            }, {
                label: 'C++',
                data: [{ x: 5, y: 65 }],
                backgroundColor: 'rgb(255, 206, 86)'
            }, {
                label: 'SQL',
                data: [{ x: 1, y: 60 }],
                backgroundColor: 'rgb(153, 102, 255)'
            }]
        },
        options: {
            scales: {
                x: {
                    type: 'linear',
                    position: 'bottom',
                    min: 0,
                    max: 7,
                    title: {
                        display: true,
                        text: 'Years of Experience'
                    }
                },
                y: {
                    min: 0,
                    max: 100,
                    title: {
                        display: true,
                        text: 'Proficiency (%)'
                    }
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Programming Language Proficiency Over Time'
                },
                legend: {
                    display: true,
                    position: 'bottom'
                }
            }
        }
    });
}

// Modify your existing myFunction to call showSkillsChart when #skills is selected
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
    
    // Check if the clicked element is the #skills link
    if (event.target.getAttribute('href') === '#skills') {
        event.preventDefault(); // Prevent the default anchor behavior
        showSkillsChart();
    }
}