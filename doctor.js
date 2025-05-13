document.addEventListener('DOMContentLoaded', function() {
    // Departments and organ images
    const departments = [
        { id: 'cardiology', name: 'Cardiology', icon: 'https://img.icons8.com/?size=100&id=V4c6yYlvXtzy&format=png&color=000000' },
        { id: 'neurology', name: 'Neurology', icon: 'https://img.icons8.com/?size=100&id=RZ3Ux64yROj8&format=png&color=000000' },
        { id: 'orthopedics', name: 'Orthopedics', icon: 'https://img.icons8.com/?size=100&id=adJkZEK1j2NH&format=png&color=000000' },
        { id: 'pediatrics', name: 'Pediatrics', icon: 'https://img.icons8.com/?size=100&id=l9uwG630F25N&format=png&color=000000' },
        { id: 'dermatology', name: 'Dermatology', icon: 'https://img.icons8.com/?size=100&id=YqDXkdIG9ggE&format=png&color=000000' },
        { id: 'ophthalmology', name: 'Ophthalmology', icon: 'https://img.icons8.com/?size=100&id=runYFO7RVbcD&format=png&color=000000' },
        { id: 'gastroenterology', name: 'Gastroenterology', icon: 'https://img.icons8.com/?size=100&id=Bebw6r8ewwdP&format=png&color=000000' },
        { id: 'pulmonology', name: 'Pulmonology', icon: 'https://img.icons8.com/?size=100&id=14848&format=png&color=000000' },
        // Previously added departments
        { id: 'endocrinology', name: 'Endocrinology', icon: 'https://img.icons8.com/?size=100&id=14817&format=png&color=000000' },
        { id: 'nephrology', name: 'Nephrology', icon: 'https://img.icons8.com/?size=100&id=20619&format=png&color=000000' },
        { id: 'urology', name: 'Urology', icon: 'https://img.icons8.com/?size=100&id=E5R0oxKmrifX&format=png&color=000000' },
        { id: 'oncology', name: 'Oncology', icon: 'https://img.icons8.com/?size=100&id=9514&format=png&color=000000' },
        { id: 'pathology', name: 'pathology', icon: 'https://img.icons8.com/?size=100&id=vQMdeUPBxBQa&format=png&color=000000' },
        { id: 'hematology', name: 'Hematology', icon: 'https://img.icons8.com/?size=100&id=uHokh4xPtHYH&format=png&color=000000' },
        // Newly added departments
        { id: 'radiology', name: 'Radiology', icon: 'https://img.icons8.com/?size=100&id=9503&format=png&color=000000' },
        { id: 'gynecology', name: 'Gynecology', icon: 'https://img.icons8.com/?size=100&id=93623&format=png&color=000000' },
        { id: 'psychiatry', name: 'Psychiatry', icon: 'https://img.icons8.com/?size=100&id=asnKRmkVwRrM&format=png&color=000000' },
        { id: 'ent', name: 'ENT', icon: 'https://img.icons8.com/?size=100&id=5ECwRcKINKVl&format=png&color=000000' }
    ];

    // Doctors data
    const doctors = {
        cardiology: [
            {
                name: "Dr. Sarah Johnson",
                title: "Cardiologist",
                image: "https://randomuser.me/api/portraits/women/65.jpg",
                schedule: [
                    { day: "Monday", time: "9:00 AM - 4:00 PM" },
                    { day: "Wednesday", time: "10:00 AM - 6:00 PM" },
                    { day: "Friday", time: "8:00 AM - 3:00 PM" }
                ]
            },
            {
                name: "Dr. Michael Chen",
                title: "Cardiac Surgeon",
                image: "https://randomuser.me/api/portraits/men/32.jpg",
                schedule: [
                    { day: "Tuesday", time: "8:00 AM - 2:00 PM" },
                    { day: "Thursday", time: "1:00 PM - 7:00 PM" },
                    { day: "Saturday", time: "9:00 AM - 1:00 PM" }
                ]
            }
        ],
        neurology: [
            {
                name: "Dr. Emily Rodriguez",
                title: "Neurologist",
                image: "https://randomuser.me/api/portraits/women/44.jpg",
                schedule: [
                    { day: "Monday", time: "10:00 AM - 5:00 PM" },
                    { day: "Thursday", time: "9:00 AM - 4:00 PM" }
                ]
            },
            {
                name: "Dr. David Kim",
                title: "Neurosurgeon",
                image: "https://randomuser.me/api/portraits/men/75.jpg",
                schedule: [
                    { day: "Tuesday", time: "8:00 AM - 3:00 PM" },
                    { day: "Friday", time: "10:00 AM - 6:00 PM" }
                ]
            }
        ],
        orthopedics: [
            {
                name: "Dr. Robert Wilson",
                title: "Orthopedic Surgeon",
                image: "https://randomuser.me/api/portraits/men/82.jpg",
                schedule: [
                    { day: "Monday", time: "8:00 AM - 4:00 PM" },
                    { day: "Wednesday", time: "8:00 AM - 4:00 PM" },
                    { day: "Friday", time: "8:00 AM - 12:00 PM" }
                ]
            },
            {
                name: "Dr. Jennifer Lee",
                title: "Sports Medicine Specialist",
                image: "https://randomuser.me/api/portraits/women/68.jpg",
                schedule: [
                    { day: "Tuesday", time: "9:00 AM - 5:00 PM" },
                    { day: "Thursday", time: "9:00 AM - 5:00 PM" }
                ]
            }
        ],
        pediatrics: [
            {
                name: "Dr. Amanda Smith",
                title: "Pediatrician",
                image: "https://randomuser.me/api/portraits/women/33.jpg",
                schedule: [
                    { day: "Monday", time: "9:00 AM - 5:00 PM" },
                    { day: "Tuesday", time: "9:00 AM - 5:00 PM" },
                    { day: "Thursday", time: "9:00 AM - 5:00 PM" }
                ]
            },
            {
                name: "Dr. James Brown",
                title: "Pediatric Cardiologist",
                image: "https://randomuser.me/api/portraits/men/45.jpg",
                schedule: [
                    { day: "Wednesday", time: "10:00 AM - 6:00 PM" },
                    { day: "Friday", time: "8:00 AM - 2:00 PM" }
                ]
            }
        ],
        dermatology: [
            {
                name: "Dr. Olivia Martinez",
                title: "Dermatologist",
                image: "https://randomuser.me/api/portraits/women/50.jpg",
                schedule: [
                    { day: "Monday", time: "9:00 AM - 4:00 PM" },
                    { day: "Wednesday", time: "9:00 AM - 4:00 PM" },
                    { day: "Friday", time: "9:00 AM - 1:00 PM" }
                ]
            },
            {
                name: "Dr. William Taylor",
                title: "Cosmetic Dermatologist",
                image: "https://randomuser.me/api/portraits/men/60.jpg",
                schedule: [
                    { day: "Tuesday", time: "10:00 AM - 6:00 PM" },
                    { day: "Thursday", time: "10:00 AM - 6:00 PM" }
                ]
            }
        ],
        ophthalmology: [
            {
                name: "Dr. Sophia Garcia",
                title: "Ophthalmologist",
                image: "https://randomuser.me/api/portraits/women/72.jpg",
                schedule: [
                    { day: "Monday", time: "8:30 AM - 4:30 PM" },
                    { day: "Wednesday", time: "8:30 AM - 4:30 PM" },
                    { day: "Friday", time: "8:30 AM - 12:30 PM" }
                ]
            },
            {
                name: "Dr. Daniel Wilson",
                title: "Retina Specialist",
                image: "https://randomuser.me/api/portraits/men/88.jpg",
                schedule: [
                    { day: "Tuesday", time: "9:00 AM - 5:00 PM" },
                    { day: "Thursday", time: "9:00 AM - 5:00 PM" }
                ]
            }
        ],
        gastroenterology: [
            {
                name: "Dr. Benjamin Clark",
                title: "Gastroenterologist",
                image: "https://randomuser.me/api/portraits/men/55.jpg",
                schedule: [
                    { day: "Monday", time: "8:00 AM - 4:00 PM" },
                    { day: "Wednesday", time: "8:00 AM - 4:00 PM" }
                ]
            },
            {
                name: "Dr. Ava Rodriguez",
                title: "Hepatologist",
                image: "https://randomuser.me/api/portraits/women/59.jpg",
                schedule: [
                    { day: "Tuesday", time: "9:00 AM - 5:00 PM" },
                    { day: "Thursday", time: "9:00 AM - 5:00 PM" },
                    { day: "Friday", time: "9:00 AM - 1:00 PM" }
                ]
            }
        ],
        pulmonology: [
            {
                name: "Dr. Ethan Anderson",
                title: "Pulmonologist",
                image: "https://randomuser.me/api/portraits/men/70.jpg",
                schedule: [
                    { day: "Monday", time: "10:00 AM - 6:00 PM" },
                    { day: "Thursday", time: "8:00 AM - 4:00 PM" }
                ]
            },
            {
                name: "Dr. Mia Thomas",
                title: "Sleep Medicine Specialist",
                image: "https://randomuser.me/api/portraits/women/77.jpg",
                schedule: [
                    { day: "Tuesday", time: "9:00 AM - 5:00 PM" },
                    { day: "Friday", time: "9:00 AM - 2:00 PM" }
                ]
            }
        ],
        endocrinology: [
            {
                name: "Dr. Rachel Green",
                title: "Endocrinologist",
                image: "https://randomuser.me/api/portraits/women/85.jpg",
                schedule: [
                    { day: "Monday", time: "9:00 AM - 5:00 PM" },
                    { day: "Wednesday", time: "9:00 AM - 5:00 PM" },
                    { day: "Friday", time: "9:00 AM - 1:00 PM" }
                ]
            },
            {
                name: "Dr. Richard Harris",
                title: "Diabetes Specialist",
                image: "https://randomuser.me/api/portraits/men/92.jpg",
                schedule: [
                    { day: "Tuesday", time: "10:00 AM - 6:00 PM" },
                    { day: "Thursday", time: "10:00 AM - 6:00 PM" }
                ]
            }
        ],
        nephrology: [
            {
                name: "Dr. Patricia White",
                title: "Nephrologist",
                image: "https://randomuser.me/api/portraits/women/90.jpg",
                schedule: [
                    { day: "Monday", time: "8:00 AM - 4:00 PM" },
                    { day: "Wednesday", time: "8:00 AM - 4:00 PM" }
                ]
            },
            {
                name: "Dr. Thomas Scott",
                title: "Kidney Transplant Specialist",
                image: "https://randomuser.me/api/portraits/men/95.jpg",
                schedule: [
                    { day: "Tuesday", time: "9:00 AM - 5:00 PM" },
                    { day: "Thursday", time: "9:00 AM - 5:00 PM" }
                ]
            }
        ],
        urology: [
            {
                name: "Dr. Kevin Adams",
                title: "Urologist",
                image: "https://randomuser.me/api/portraits/men/97.jpg",
                schedule: [
                    { day: "Monday", time: "9:00 AM - 5:00 PM" },
                    { day: "Wednesday", time: "9:00 AM - 5:00 PM" },
                    { day: "Friday", time: "9:00 AM - 1:00 PM" }
                ]
            },
            {
                name: "Dr. Lisa Parker",
                title: "Urogynecologist",
                image: "https://randomuser.me/api/portraits/women/92.jpg",
                schedule: [
                    { day: "Tuesday", time: "10:00 AM - 6:00 PM" },
                    { day: "Thursday", time: "10:00 AM - 6:00 PM" }
                ]
            }
        ],
        oncology: [
            {
                name: "Dr. Mark Robinson",
                title: "Oncologist",
                image: "https://randomuser.me/api/portraits/men/98.jpg",
                schedule: [
                    { day: "Monday", time: "8:00 AM - 4:00 PM" },
                    { day: "Wednesday", time: "8:00 AM - 4:00 PM" }
                ]
            },
            {
                name: "Dr. Nancy Carter",
                title: "Radiation Oncologist",
                image: "https://randomuser.me/api/portraits/women/94.jpg",
                schedule: [
                    { day: "Tuesday", time: "9:00 AM - 5:00 PM" },
                    { day: "Thursday", time: "9:00 AM - 5:00 PM" },
                    { day: "Friday", time: "9:00 AM - 1:00 PM" }
                ]
            }
        ],
        pathology: [
            {
                name: "Dr. Steven Baker",
                title: "pathologist",
                image: "https://randomuser.me/api/portraits/men/99.jpg",
                schedule: [
                    { day: "Monday", time: "10:00 AM - 6:00 PM" },
                    { day: "Thursday", time: "8:00 AM - 4:00 PM" }
                ]
            },
            {
                name: "Dr. Jessica Young",
                title: "pathologist",
                image: "https://randomuser.me/api/portraits/women/96.jpg",
                schedule: [
                    { day: "Tuesday", time: "9:00 AM - 5:00 PM" },
                    { day: "Friday", time: "9:00 AM - 2:00 PM" }
                ]
            }
        ],
        hematology: [
            {
                name: "Dr. Paul Mitchell",
                title: "Hematologist",
                image: "https://randomuser.me/api/portraits/men/100.jpg",
                schedule: [
                    { day: "Monday", time: "9:00 AM - 5:00 PM" },
                    { day: "Wednesday", time: "9:00 AM - 5:00 PM" }
                ]
            },
            {
                name: "Dr. Rebecca Turner",
                title: "Blood Disorder Specialist",
                image: "https://randomuser.me/api/portraits/women/98.jpg",
                schedule: [
                    { day: "Tuesday", time: "10:00 AM - 6:00 PM" },
                    { day: "Thursday", time: "10:00 AM - 6:00 PM" }
                ]
            }
        ],
        radiology: [
            {
                name: "Dr. Alan Parker",
                title: "Radiologist",
                image: "https://randomuser.me/api/portraits/men/101.jpg",
                schedule: [
                    { day: "Monday", time: "8:00 AM - 4:00 PM" },
                    { day: "Wednesday", time: "8:00 AM - 4:00 PM" },
                    { day: "Friday", time: "8:00 AM - 12:00 PM" }
                ]
            },
            {
                name: "Dr. Susan Miller",
                title: "Interventional Radiologist",
                image: "https://randomuser.me/api/portraits/women/99.jpg",
                schedule: [
                    { day: "Tuesday", time: "9:00 AM - 5:00 PM" },
                    { day: "Thursday", time: "9:00 AM - 5:00 PM" }
                ]
            }
        ],
        gynecology: [
            {
                name: "Dr. Elizabeth Taylor",
                title: "Gynecologist",
                image: "https://randomuser.me/api/portraits/women/100.jpg",
                schedule: [
                    { day: "Monday", time: "9:00 AM - 5:00 PM" },
                    { day: "Wednesday", time: "9:00 AM - 5:00 PM" }
                ]
            },
            {
                name: "Dr. Robert King",
                title: "Obstetrician",
                image: "https://randomuser.me/api/portraits/men/102.jpg",
                schedule: [
                    { day: "Tuesday", time: "10:00 AM - 6:00 PM" },
                    { day: "Thursday", time: "10:00 AM - 6:00 PM" },
                    { day: "Saturday", time: "9:00 AM - 1:00 PM" }
                ]
            }
        ],
        psychiatry: [
            {
                name: "Dr. Laura Wilson",
                title: "Psychiatrist",
                image: "https://randomuser.me/api/portraits/women/101.jpg",
                schedule: [
                    { day: "Monday", time: "10:00 AM - 6:00 PM" },
                    { day: "Wednesday", time: "10:00 AM - 6:00 PM" }
                ]
            },
            {
                name: "Dr. Mark Thompson",
                title: "Child Psychiatrist",
                image: "https://randomuser.me/api/portraits/men/103.jpg",
                schedule: [
                    { day: "Tuesday", time: "9:00 AM - 5:00 PM" },
                    { day: "Thursday", time: "9:00 AM - 5:00 PM" }
                ]
            }
        ],
        ent: [
            {
                name: "Dr. Richard Davis",
                title: "ENT Specialist",
                image: "https://randomuser.me/api/portraits/men/104.jpg",
                schedule: [
                    { day: "Monday", time: "8:00 AM - 4:00 PM" },
                    { day: "Wednesday", time: "8:00 AM - 4:00 PM" },
                    { day: "Friday", time: "8:00 AM - 12:00 PM" }
                ]
            },
            {
                name: "Dr. Sarah Clark",
                title: "Otolaryngologist",
                image: "https://randomuser.me/api/portraits/women/102.jpg",
                schedule: [
                    { day: "Tuesday", time: "9:00 AM - 5:00 PM" },
                    { day: "Thursday", time: "9:00 AM - 5:00 PM" }
                ]
            }
        ]
    };

    // The rest of your existing code remains the same...
    // DOM elements
    const organsGrid = document.querySelector('.organs-grid');
    const doctorsCards = document.getElementById('doctors-cards');
    const departmentTitle = document.getElementById('department-title');

    // Create organ cards
    departments.forEach(dept => {
        const organCard = document.createElement('div');
        organCard.className = 'organ-card';
        organCard.id = dept.id;
        organCard.innerHTML = `
            <img src="${dept.icon}" alt="${dept.name}" class="organ-icon">
            <div class="organ-name">${dept.name}</div>
        `;
        organsGrid.appendChild(organCard);

        // Add click event
        organCard.addEventListener('click', () => {
            // Remove active class from all cards
            document.querySelectorAll('.organ-card').forEach(card => {
                card.classList.remove('active');
            });
            
            // Add active class to clicked card
            organCard.classList.add('active');
            
            // Display doctors for this department
            displayDoctors(dept.id, dept.name);
        });
    });

    // Function to display doctors
    function displayDoctors(deptId, deptName) {
        departmentTitle.textContent = deptName;
        doctorsCards.innerHTML = '';

        if (doctors[deptId]) {
            doctors[deptId].forEach((doctor, index) => {
                const doctorCard = document.createElement('div');
                doctorCard.className = 'doctor-card fade-in';
                doctorCard.style.animationDelay = `${index * 0.1}s`;
                doctorCard.innerHTML = `
                    <img src="${doctor.image}" alt="${doctor.name}" class="doctor-image">
                    <div class="doctor-info">
                        <h3 class="doctor-name">${doctor.name}</h3>
                        <p class="doctor-title">${doctor.title}</p>
                        <div class="doctor-schedule">
                            ${doctor.schedule.map(item => `
                                <div class="schedule-item">
                                    <span class="schedule-day">${item.day}</span>
                                    <span class="schedule-time">${item.time}</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    <div class="doctor-contact">
                        <button class="contact-btn"><i class="fas fa-calendar-alt"></i>Book</button>
                        <button class="contact-btn"><i class="fas fa-info-circle"></i> Profile</button>
                    </div>
                `;
                doctorsCards.appendChild(doctorCard);
            });
        } else {
            doctorsCards.innerHTML = `
                <div class="placeholder">
                    <i class="fas fa-user-md fa-3x"></i>
                    <p>No doctors currently available in this department</p>
                </div>
            `;
        }
    }

    // Initialize with first department
    if (departments.length > 0) {
        document.getElementById(departments[0].id).click();
    }
});