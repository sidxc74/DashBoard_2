  const customers = [
    {
      "name": "Rajesh Kumar",
      "email": "rajesh.kumar@example.com",
      "phone": "+91 76543 87654",
      "address": "15 Janpath, New Delhi, DL, 110005",
      "serviceRequests": [
        {
          "serviceType": "Cook",
          "status": "Completed",
          "rating": 4,
          "review": "The cook prepared delicious meals. Highly recommended.",
          "requestDate": "January 5, 2024 11:30 AM",
          "completionDate": "January 5, 2024 1:15 PM",
          "source": "Web Link",
          "customerType": "Returning/Revisit",
          "amountGiven": 2000.00,
          "technicianAssigned": "CookTech1"
        },
        {
          "serviceType": "Electrician",
          "status": "Pending",
          "rating": null,
          "review": null,
          "requestDate": "January 6, 2024 2:00 PM",
          "completionDate": null,
          "source": "Web Link",
          "customerType": "Returning/Revisit",
          "amountGiven": 0.00,
          "technicianAssigned": "ElectricianTech1"
        }
         
      ]
    },
    {
      "name": "Pooja Mehta",
      "email": "pooja.mehta@example.com",
      "phone": "+91 98765 54321",
      "address": "42 Rajendra Nagar, Mumbai, MH, 400006",
      "serviceRequests": [
        {
          "serviceType": "Plumber",
          "status": "Completed",
          "rating": 5,
          "review": "Excellent plumbing service. The technician fixed all issues.",
          "requestDate": "January 3, 2024 3:30 PM",
          "completionDate": "January 3, 2024 5:15 PM",
          "source": "Web Link",
          "customerType": "Returning/Revisit",
          "amountGiven": 2500.00,
          "technicianAssigned": "PlumberTech1"
        },
        {
          "serviceType": "Gardener",
          "status": "Pending",
          "rating": null,
          "review": null,
          "requestDate": "December 31, 2023 1:00 PM",
          "completionDate": null,
          "source": "Platform",
          "customerType": "Returning/Revisit",
          "amountGiven": 0.00,
          "technicianAssigned": "GardenerTech1"
        }
         
      ]
    },
    {
      "name": "Amit Singh",
      "email": "amit.singh@example.com",
      "phone": "+91 87654 76543",
      "address": "8 MG Road, Bangalore, KA, 560004",
      "serviceRequests": [
        {
          "serviceType": "Cook",
          "status": "Pending",
          "rating": null,
          "review": null,
          "requestDate": "January 3, 2024 10:45 AM",
          "completionDate": null,
          "source": "Platform",
          "customerType": "New Customer",
          "amountGiven": 0.00,
          "technicianAssigned": "CookTech2"
        },
        {
          "serviceType": "Plumber",
          "status": "Completed",
          "rating": 4,
          "review": "The plumber did a great job fixing the leaks.",
          "requestDate": "January 5, 2024 12:15 PM",
          "completionDate": "January 5, 2024 2:00 PM",
          "source": "Walk-in",
          "customerType": "Returning/Revisit",
          "amountGiven": 2000.00,
          "technicianAssigned": "PlumberTech2"
        }
         
      ]
    },
    {
      "name": "Amita Singh",
      "email": "amita.singh@example.com",
      "phone": "+91 76543 87654",
      "address": "22 Civil Lines, Jaipur, RJ, 302004",
      "serviceRequests": [
        {
          "serviceType": "Gardener",
          "status": "Completed",
          "rating": 3,
          "review": "Average gardening service. Expected more effort.",
          "requestDate": "January 3, 2024 3:30 PM",
          "completionDate": "January 3, 2024 5:15 PM",
          "source": "Platform",
          "customerType": "New Customer",
          "amountGiven": 1800.00,
          "technicianAssigned": "GardenerTech2"
        },
        {
          "serviceType": "Electrician",
          "status": "Pending",
          "rating": null,
          "review": null,
          "requestDate": "December 31, 2023 11:30 AM",
          "completionDate": null,
          "source": "Walk-in",
          "customerType": "Returning/Revisit",
          "amountGiven": 0.00,
          "technicianAssigned": "ElectricianTech2"
        }
         
      ]
    },
    {
      "name": "Sanjay Kumar",
      "email": "sanjay.kumar@example.com",
      "phone": "+91 98765 67890",
      "address": "18 Gandhi Road, Ahmedabad, GJ, 380006",
      "serviceRequests": [
        {
          "serviceType": "Cook",
          "status": "Completed",
          "rating": 5,
          "review": "The cook provided an exceptional culinary experience.",
          "requestDate": "January 2, 2024 2:00 PM",
          "completionDate": "January 1, 2024 3:30 PM",
          "source": "Web Link",
          "customerType": "Returning/Revisit",
          "amountGiven": 2500.00,
          "technicianAssigned": "CookTech3"
        },
        {
          "serviceType": "Plumber",
          "status": "Pending",
          "rating": null,
          "review": null,
          "requestDate": "January 5, 2024 10:45 AM",
          "completionDate": null,
          "source": "Web Link",
          "customerType": "Returning/Revisit",
          "amountGiven": 0.00,
          "technicianAssigned": "PlumberTech3"
        }
         
      ]
    },
    {
      "name": "Rita Gupta",
      "email": "rita.gupta@example.com",
      "phone": "+91 87654 54321",
      "address": "35 Sardar Patel Nagar, Pune, MH, 411006",
      "serviceRequests": [
        {
          "serviceType": "Gardener",
          "status": "Pending",
          "rating": null,
          "review": null,
          "requestDate": "January 6, 2024 11:30 AM",
          "completionDate": null,
          "source": "Web Link",
          "customerType": "Returning/Revisit",
          "amountGiven": 0.00,
          "technicianAssigned": "GardenerTech3"
        },
        {
          "serviceType": "Electrician",
          "status": "Completed",
          "rating": 4,
          "review": "The electrician fixed the wiring issues efficiently.",
          "requestDate": "January 3, 2024 3:30 PM",
          "completionDate": "January 3, 2024 5:15 PM",
          "source": "Platform",
          "customerType": "Returning/Revisit",
          "amountGiven": 2000.00,
          "technicianAssigned": "ElectricianTech3"
        }
         
      ]
    },
    {
      "name": "Vijay Mehta",
      "email": "vijay.mehta@example.com",
      "phone": "+91 76543 87654",
      "address": "25 Janpath, New Delhi, DL, 110006",
      "serviceRequests": [
        {
          "serviceType": "Electrician",
          "status": "Pending",
          "rating": null,
          "review": null,
          "requestDate": "January 4, 2024 12:15 PM",
          "completionDate": null,
          "source": "Web Link",
          "customerType": "Returning/Revisit",
          "amountGiven": 0.00,
          "technicianAssigned": "ElectricianTech1"
        },
        {
          "serviceType": "Cook",
          "status": "Completed",
          "rating": 3,
          "review": "Satisfactory cooking. The taste could be improved.",
          "requestDate": "January 5, 2024 2:00 PM",
          "completionDate": "January 5, 2024 3:30 PM",
          "source": "Web Link",
          "customerType": "Returning/Revisit",
          "amountGiven": 1800.00,
          "technicianAssigned": "CookTech1"
        }
         
      ]
    },
    {
      "name": "Mala Sinha",
      "email": "mala.sinha@example.com",
      "phone": "+91 98765 54321",
      "address": "42 Rajendra Nagar, Mumbai, MH, 400008",
      "serviceRequests": [
        {
          "serviceType": "Plumber",
          "status": "Pending",
          "rating": null,
          "review": null,
          "requestDate": "January 6, 2024 11:30 AM",
          "completionDate": null,
          "source": "Web Link",
          "customerType": "Returning/Revisit",
          "amountGiven": 0.00,
          "technicianAssigned": "PlumberTech1"
        },
        {
          "serviceType": "Gardener",
          "status": "Completed",
          "rating": 2,
          "review": "Unsatisfactory gardening service. The plants were not well taken care of.",
          "requestDate": "January 3, 2024 3:30 PM",
          "completionDate": "January 3, 2024 5:15 PM",
          "source": "Platform",
          "customerType": "Returning/Revisit",
          "amountGiven": 1200.00,
          "technicianAssigned": "GardenerTech1"
        }
         
      ]
    },
    {
      "name": "Rajendra Khanna",
      "email": "rajendra.khanna@example.com",
      "phone": "+91 87654 76543",
      "address": "8 MG Road, Bangalore, KA, 560007",
      "serviceRequests": [
        {
          "serviceType": "Cook",
          "status": "Pending",
          "rating": null,
          "review": null,
          "requestDate": "January 1, 2024 10:45 AM",
          "completionDate": null,
          "source": "Platform",
          "customerType": "New Customer",
          "amountGiven": 0.00,
          "technicianAssigned": "CookTech2"
        },
        {
          "serviceType": "Electrician",
          "status": "Completed",
          "rating": 4,
          "review": "The electrician fixed the wiring issues efficiently.",
          "requestDate": "January 5, 2024 12:15 PM",
          "completionDate": "January 5, 2024 2:00 PM",
          "source": "Walk-in",
          "customerType": "Returning/Revisit",
          "amountGiven": 2000.00,
          "technicianAssigned": "ElectricianTech2"
        }
         
      ] 
    },
    {
        "name": "Amit Singh",
        "email": "amit.singh@example.com",
        "phone": "+91 87654 76543",
        "address": "8 MG Road, Bangalore, KA, 560008",
        "serviceRequests": [
          {
            "serviceType": "Plumber",
            "status": "Pending",
            "rating": null,
            "review": null,
            "requestDate": "January 5, 2024 11:30 AM",
            "completionDate": null,
            "source": "Platform",
            "customerType": "New Customer",
            "amountGiven": 0.00,
            "technicianAssigned": "PlumberTech2"
          },
          {
            "serviceType": "Gardener",
            "status": "Completed",
            "rating": 3,
            "review": "Average gardening service. Expected more effort.",
            "requestDate": "January 5, 2024 1:00 PM",
            "completionDate": "January 5, 2024 2:45 PM",
            "source": "Walk-in",
            "customerType": "Returning/Revisit",
            "amountGiven": 1800.00,
            "technicianAssigned": "GardenerTech2"
          }
           
        ]
      },
      {
        "name": "Amita Singh",
        "email": "amita.singh@example.com",
        "phone": "+91 76543 87654",
        "address": "22 Civil Lines, Jaipur, RJ, 302005",
        "serviceRequests": [
          {
            "serviceType": "Electrician",
            "status": "Completed",
            "rating": 5,
            "review": "Outstanding electrical service! The technician was highly skilled.",
            "requestDate": "January 6, 2024 10:45 AM",
            "completionDate": "January 6, 2024 12:30 PM",
            "source": "Platform",
            "customerType": "Returning/Revisit",
            "amountGiven": 2500.00,
            "technicianAssigned": "ElectricianTech3"
          },
          {
            "serviceType": "Cook",
            "status": "Pending",
            "rating": null,
            "review": null,
            "requestDate": "January 3, 2024 3:30 PM",
            "completionDate": null,
            "source": "Platform",
            "customerType": "Returning/Revisit",
            "amountGiven": 0.00,
            "technicianAssigned": "CookTech3"
          }
           
        ]
      },
      {
        "name": "Sanjay Kumar",
        "email": "sanjay.kumar@example.com",
        "phone": "+91 98765 67890",
        "address": "18 Gandhi Road, Ahmedabad, GJ, 380008",
        "serviceRequests": [
          {
            "serviceType": "Gardener",
            "status": "Pending",
            "rating": null,
            "review": null,
            "requestDate": "January 4, 2024 12:15 PM",
            "completionDate": null,
            "source": "Walk-in",
            "customerType": "Returning/Revisit",
            "amountGiven": 0.00,
            "technicianAssigned": "GardenerTech3"
          },
          {
            "serviceType": "Plumber",
            "status": "Completed",
            "rating": 4,
            "review": "The plumber did a good job fixing the leaks.",
            "requestDate": "January 5, 2024 2:00 PM",
            "completionDate": "January 5, 2024 3:30 PM",
            "source": "Platform",
            "customerType": "New Customer",
            "amountGiven": 2000.00,
            "technicianAssigned": "PlumberTech3"
          }
           
        ]
      },
      {
        "name": "Rita Gupta",
        "email": "rita.gupta@example.com",
        "phone": "+91 87654 54321",
        "address": "35 Sardar Patel Nagar, Pune, MH, 411008",
        "serviceRequests": [
          {
            "serviceType": "Cook",
            "status": "Completed",
            "rating": 2,
            "review": "Unsatisfactory cooking service. The taste was not up to the mark.",
            "requestDate": "January 6, 2024 11:30 AM",
            "completionDate": "January 6, 2024 1:15 PM",
            "source": "Web Link",
            "customerType": "Returning/Revisit",
            "amountGiven": 1200.00,
            "technicianAssigned": "CookTech1"
          },
          {
            "serviceType": "Electrician",
            "status": "Pending",
            "rating": null,
            "review": null,
            "requestDate": "January 3, 2024 3:30 PM",
            "completionDate": null,
            "source": "Walk-in",
            "customerType": "New Customer",
            "amountGiven": 0.00,
            "technicianAssigned": "ElectricianTech1"
          }
           
        ]
      },
      {
        "name": "Vijay Mehta",
        "email": "vijay.mehta@example.com",
        "phone": "+91 76543 87654",
        "address": "25 Janpath, New Delhi, DL, 110007",
        "serviceRequests": [
          {
            "serviceType": "Cook",
            "status": "Pending",
            "rating": null,
            "review": null,
            "requestDate": "January 5, 2024 10:45 AM",
            "completionDate": null,
            "source": "Web Link",
            "customerType": "Returning/Revisit",
            "amountGiven": 0.00,
            "technicianAssigned": "CookTech2"
          },
          {
            "serviceType": "Plumber",
            "status": "Completed",
            "rating": 4,
            "review": "The plumber did a great job fixing the leaks.",
            "requestDate": "January 5, 2024 12:15 PM",
            "completionDate": "January 5, 2024 2:00 PM",
            "source": "Walk-in",
            "customerType": "Returning/Revisit",
            "amountGiven": 2000.00,
            "technicianAssigned": "PlumberTech2"
          }
           
        ]
      },
      {
        "name": "Mala Sinha",
        "email": "mala.sinha@example.com",
        "phone": "+91 98765 54321",
        "address": "42 Rajendra Nagar, Mumbai, MH, 400009",
        "serviceRequests": [
          {
            "serviceType": "Gardener",
            "status": "Completed",
            "rating": 4,
            "review": "The gardener did an excellent job. The garden looks beautiful.",
            "requestDate": "January 6, 2024 2:00 PM",
            "completionDate": "January 6, 2024 3:30 PM",
            "source": "Web Link",
            "customerType": "Returning/Revisit",
            "amountGiven": 2000.00,
            "technicianAssigned": "GardenerTech1"
          },
          {
            "serviceType": "Electrician",
            "status": "Pending",
            "rating": null,
            "review": null,
            "requestDate": "January 3, 2024 11:30 AM",
            "completionDate": null,
            "source": "Platform",
            "customerType": "New Customer",
            "amountGiven": 0.00,
            "technicianAssigned": "ElectricianTech1"
          }
          
        ]
      },
      {
        "name": "Rajendra Khanna",
        "email": "rajendra.khanna@example.com",
        "phone": "+91 87654 76543",
        "address": "8 MG Road, Bangalore, KA, 560010",
        "serviceRequests": [
          {
            "serviceType": "Cook",
            "status": "Pending",
            "rating": null,
            "review": null,
            "requestDate": "January 1, 2024 3:30 PM",
            "completionDate": null,
            "source": "Walk-in",
            "customerType": "Returning/Revisit",
            "amountGiven": 0.00,
            "technicianAssigned": "CookTech3"
          },
          {
            "serviceType": "Plumber",
            "status": "Completed",
            "rating": 3,
            "review": "Satisfactory plumbing service. Fixed the issues on time.",
            "requestDate": "January 5, 2024 10:45 AM",
            "completionDate": "January 5, 2024 12:30 PM",
            "source": "Web Link",
            "customerType": "Returning/Revisit",
            "amountGiven": 1800.00,
            "technicianAssigned": "PlumberTech3"
          }
          
        ]
      },
      {
        "name": "Suresh Kumar",
        "email": "suresh.kumar@example.com",
        "phone": "+91 87654 76543",
        "address": "15 MG Road, Bangalore, KA, 560012",
        "serviceRequests": [
          {
            "serviceType": "Plumber",
            "status": "Pending",
            "rating": null,
            "review": null,
            "requestDate": " January 1, 2024 11:30 AM",
            "completionDate": null,
            "source": "Platform",
            "customerType": "New Customer",
            "amountGiven": 0.00,
            "technicianAssigned": "PlumberTech2"
          },
          {
            "serviceType": "Gardener",
            "status": "Completed",
            "rating": 3,
            "review": "Average gardening service. Expected more effort.",
            "requestDate": "January 5, 2024 1:00 PM",
            "completionDate": "January 5, 2024 2:45 PM",
            "source": "Walk-in",
            "customerType": "Returning/Revisit",
            "amountGiven": 1800.00,
            "technicianAssigned": "GardenerTech2"
          }
           
        ]
      },
      {
        "name": "Seema Yadav",
        "email": "seema.yadav@example.com",
        "phone": "+91 76543 87654",
        "address": "28 Civil Lines, Jaipur, RJ, 302007",
        "serviceRequests": [
          {
            "serviceType": "Electrician",
            "status": "Completed",
            "rating": 5,
            "review": "Outstanding electrical service! The technician was highly skilled.",
            "requestDate": "January 6, 2024 10:45 AM",
            "completionDate": "January 6, 2024 12:30 PM",
            "source": "Platform",
            "customerType": "Returning/Revisit",
            "amountGiven": 2500.00,
            "technicianAssigned": "ElectricianTech3"
          },
          {
            "serviceType": "Cook",
            "status": "Pending",
            "rating": null,
            "review": null,
            "requestDate": "January 3, 2024 3:30 PM",
            "completionDate": null,
            "source": "Platform",
            "customerType": "Returning/Revisit",
            "amountGiven": 0.00,
            "technicianAssigned": "CookTech3"
          }
           
        ]
      },
      {
        "name": "Rahul Sharma",
        "email": "rahul.sharma@example.com",
        "phone": "+91 98765 67890",
        "address": "22 Gandhi Road, Ahmedabad, GJ, 380010",
        "serviceRequests": [
          {
            "serviceType": "Gardener",
            "status": "Pending",
            "rating": null,
            "review": null,
            "requestDate": "January 1, 2024 12:15 PM",
            "completionDate": null,
            "source": "Walk-in",
            "customerType": "Returning/Revisit",
            "amountGiven": 0.00,
            "technicianAssigned": "GardenerTech3"
          },
          {
            "serviceType": "Plumber",
            "status": "Completed",
            "rating": 4,
            "review": "The plumber did a good job fixing the leaks.",
            "requestDate": "January 5, 2024 2:00 PM",
            "completionDate": "January 5, 2024 3:30 PM",
            "source": "Platform",
            "customerType": "New Customer",
            "amountGiven": 2000.00,
            "technicianAssigned": "PlumberTech3"
          }
           
        ]
      },
      {
        "name": "Neha Verma",
        "email": "neha.verma@example.com",
        "phone": "+91 87654 54321",
        "address": "32 Sardar Patel Nagar, Pune, MH, 411010",
        "serviceRequests": [
          {
            "serviceType": "Cook",
            "status": "Completed",
            "rating": 2,
            "review": "Unsatisfactory cooking service. The taste was not up to the mark.",
            "requestDate": "January 6, 2024 11:30 AM",
            "completionDate": "January 6, 2024 1:15 PM",
            "source": "Web Link",
            "customerType": "Returning/Revisit",
            "amountGiven": 1200.00,
            "technicianAssigned": "CookTech1"
          },
          {
            "serviceType": "Electrician",
            "status": "Pending",
            "rating": null,
            "review": null,
            "requestDate": "January 3, 2024 3:30 PM",
            "completionDate": null,
            "source": "Walk-in",
            "customerType": "New Customer",
            "amountGiven": 0.00,
            "technicianAssigned": "ElectricianTech1"
          }
           
        ]
      },
      {
        "name": "Vikram Mehta",
        "email": "vikram.mehta@example.com",
        "phone": "+91 76543 87654",
        "address": "35 Janpath, New Delhi, DL, 110009",
        "serviceRequests": [
          {
            "serviceType": "Cook",
            "status": "Pending",
            "rating": null,
            "review": null,
            "requestDate": "January 1, 2024 10:45 AM",
            "completionDate": null,
            "source": "Web Link",
            "customerType": "Returning/Revisit",
            "amountGiven": 0.00,
            "technicianAssigned": "CookTech2"
          },
          {
            "serviceType": "Plumber",
            "status": "Completed",
            "rating": 4,
            "review": "The plumber did a great job fixing the leaks.",
            "requestDate": "January 5, 2024 12:15 PM",
            "completionDate": "January 5, 2024 2:00 PM",
            "source": "Walk-in",
            "customerType": "Returning/Revisit",
            "amountGiven": 2000.00,
            "technicianAssigned": "PlumberTech2"
          }
           
        ]
      },
      {
        "name": "Neeta Khanna",
        "email": "neeta.khanna@example.com",
        "phone": "+91 98765 54321",
        "address": "42 Rajendra Nagar, Mumbai, MH, 400010",
        "serviceRequests": [
          {
            "serviceType": "Gardener",
            "status": "Completed",
            "rating": 4,
            "review": "The gardener did an excellent job. The garden looks beautiful.",
            "requestDate": "January 6, 2024 2:00 PM",
            "completionDate": "January 6, 2024 3:30 PM",
            "source": "Web Link",
            "customerType": "Returning/Revisit",
            "amountGiven": 2000.00,
            "technicianAssigned": "GardenerTech1"
          },
          {
            "serviceType": "Electrician",
            "status": "Pending",
            "rating": null,
            "review": null,
            "requestDate": "January 3, 2024 11:30 AM",
            "completionDate": null,
            "source": "Platform",
            "customerType": "New Customer",
            "amountGiven": 0.00,
            "technicianAssigned": "ElectricianTech1"
          }
           
        ]
      },
      {
        "name": "Rajendra Khanna",
        "email": "rajendra.khanna@example.com",
        "phone": "+91 87654 76543",
        "address": "8 MG Road, Bangalore, KA, 560010",
        "serviceRequests": [
          {
            "serviceType": "Cook",
            "status": "Pending",
            "rating": null,
            "review": null,
            "requestDate": "January 1, 2024 3:30 PM",
            "completionDate": null,
            "source": "Walk-in",
            "customerType": "Returning/Revisit",
            "amountGiven": 0.00,
            "technicianAssigned": "CookTech3"
          },
          {
            "serviceType": "Plumber",
            "status": "Completed",
            "rating": 3,
            "review": "Satisfactory plumbing service. Fixed the issues on time.",
            "requestDate": "January 5, 2024 10:45 AM",
            "completionDate": "January 5, 2024 12:30 PM",
            "source": "Web Link",
            "customerType": "Returning/Revisit",
            "amountGiven": 1800.00,
            "technicianAssigned": "PlumberTech3"
          }
           
        ]
      },
      {
        "name": "Ankita Mehra",
        "email": "ankita.mehra@example.com",
        "phone": "+91 76543 87654",
        "address": "25 Janpath, New Delhi, DL, 110011",
        "serviceRequests": [
          {
            "serviceType": "Cook",
            "status": "Pending",
            "rating": null,
            "review": null,
            "requestDate": "January 1, 2024 10:45 AM",
            "completionDate": null,
            "source": "Web Link",
            "customerType": "Returning/Revisit",
            "amountGiven": 0.00,
            "technicianAssigned": "CookTech2"
          },
          {
            "serviceType": "Gardener",
            "status": "Completed",
            "rating": 4,
            "review": "The gardener did a great job maintaining the garden.",
            "requestDate": "January 5, 2024 12:15 PM",
            "completionDate": "January 5, 2024 1:45 PM",
            "source": "Walk-in",
            "customerType": "Returning/Revisit",
            "amountGiven": 2000.00,
            "technicianAssigned": "GardenerTech2"
          }
           
        ]
      },
      {
        "name": "Pankaj Kapoor",
        "email": "pankaj.kapoor@example.com",
        "phone": "+91 87654 54321",
        "address": "32 Sardar Patel Nagar, Pune, MH, 411011",
        "serviceRequests": [
          {
            "serviceType": "Cook",
            "status": "Completed",
            "rating": 2,
            "review": "The cooking service was below expectations. Disappointed.",
            "requestDate": "January 6, 2024 11:30 AM",
            "completionDate": "January 6, 2024 1:15 PM",
            "source": "Web Link",
            "customerType": "Returning/Revisit",
            "amountGiven": 1200.00,
            "technicianAssigned": "CookTech1"
          },
          {
            "serviceType": "Electrician",
            "status": "Pending",
            "rating": null,
            "review": null,
            "requestDate": "January 3, 2024 3:30 PM",
            "completionDate": null,
            "source": "Walk-in",
            "customerType": "New Customer",
            "amountGiven": 0.00,
            "technicianAssigned": "ElectricianTech1"
          }
           
        ]
      },
      {
        "name": "Renu Mehta",
        "email": "renu.mehta@example.com",
        "phone": "+91 98765 54321",
        "address": "42 Rajendra Nagar, Mumbai, MH, 400011",
        "serviceRequests": [
          {
            "serviceType": "Gardener",
            "status": "Completed",
            "rating": 4,
            "review": "The gardener did an excellent job. The garden looks beautiful.",
            "requestDate": "January 6, 2024 2:00 PM",
            "completionDate": "January 6, 2024 3:30 PM",
            "source": "Web Link",
            "customerType": "Returning/Revisit",
            "amountGiven": 2000.00,
            "technicianAssigned": "GardenerTech1"
          },
          {
            "serviceType": "Electrician",
            "status": "Pending",
            "rating": null,
            "review": null,
            "requestDate": "January 3, 2024 11:30 AM",
            "completionDate": null,
            "source": "Platform",
            "customerType": "New Customer",
            "amountGiven": 0.00,
            "technicianAssigned": "ElectricianTech1"
          }
           
        ]
      },
      {
        "name": "Neha Sharma",
        "email": "neha.sharma@example.com",
        "phone": "+91 87654 12345",
        "address": "40 Gandhi Road, Bhopal, MP, 462002",
        "serviceRequests": [
          {
            "serviceType": "Electrician",
            "status": "Completed",
            "rating": 5,
            "review": "Excellent service! The technician was very professional.",
            "requestDate": "January 1, 2024 9:30 AM",
            "completionDate": "January 1, 2024 11:00 AM",
            "source": "Platform",
            "customerType": "Returning/Revisit",
            "amountGiven": 3000.00,
            "technicianAssigned": "ElectricianTech3"
          },
          {
            "serviceType": "Gardener",
            "status": "Completed",
            "rating": 4,
            "review": "Great job in maintaining the garden. Pleased with the service.",
            "requestDate": "January 5, 2024 2:30 PM",
            "completionDate": "January 5, 2024 4:00 PM",
            "source": "Walk-in",
            "customerType": "New Customer",
            "amountGiven": 2500.00,
            "technicianAssigned": "GardenerTech1"
          }
           
        ]
      },
      {
        "name": "Suresh Verma",
        "email": "suresh.verma@example.com",
        "phone": "+91 76543 98765",
        "address": "28 Rajaji Street, Bangalore, KA, 560012",
        "serviceRequests": [
          {
            "serviceType": "Plumber",
            "status": "Completed",
            "rating": 5,
            "review": "Quick and efficient plumbing service. Highly recommended.",
            "requestDate": "January 6, 2024 11:45 AM",
            "completionDate": "January 6, 2024 1:15 PM",
            "source": "Web Link",
            "customerType": "Returning/Revisit",
            "amountGiven": 2800.00,
            "technicianAssigned": "PlumberTech2"
          },
          {
            "serviceType": "Cook",
            "status": "Completed",
            "rating": 3,
            "review": "Average cooking service. Expected more variety in dishes.",
            "requestDate": "January 3, 2024 3:00 PM",
            "completionDate": "January 3, 2024 4:30 PM",
            "source": "Platform",
            "customerType": "New Customer",
            "amountGiven": 2200.00,
            "technicianAssigned": "CookTech2"
          }
           
        ]
      },
      {
        "name": "Preeti Singh",
        "email": "preeti.singh@example.com",
        "phone": "+91 98765 43210",
        "address": "22 Heritage Road, Jaipur, RJ, 302002",
        "serviceRequests": [
          {
            "serviceType": "Electrician",
            "status": "Pending",
            "rating": null,
            "review": null,
            "requestDate": "December 31, 2023 2:45 PM",
            "completionDate": null,
            "source": "Platform",
            "customerType": "Returning/Revisit",
            "amountGiven": 0.00,
            "technicianAssigned": "ElectricianTech1"
          },
          {
            "serviceType": "Plumber",
            "status": "Completed",
            "rating": 4,
            "review": "Satisfied with the plumbing service. Timely and professional.",
            "requestDate": "December 27, 2023 10:30 AM",
            "completionDate": "December 27, 2023 12:00 PM",
            "source": "Walk-in",
            "customerType": "New Customer",
            "amountGiven": 2600.00,
            "technicianAssigned": "PlumberTech1"
          }
           
        ]
      },
      {
        "name": "Ritu Gupta",
        "email": "ritu.gupta@example.com",
        "phone": "+91 87654 32109",
        "address": "12 Civil Lines, Indore, MP, 452002",
        "serviceRequests": [
          {
            "serviceType": "Cook",
            "status": "Pending",
            "rating": null,
            "review": null,
            "requestDate": "January 1, 2024 11:00 AM",
            "completionDate": null,
            "source": "Walk-in",
            "customerType": "New Customer",
            "amountGiven": 0.00,
            "technicianAssigned": "CookTech3"
          },
          {
            "serviceType": "Gardener",
            "status": "Completed",
            "rating": 5,
            "review": "Exceptional gardening service. The garden looks stunning.",
            "requestDate": "January 5, 2024 1:30 PM",
            "completionDate": "January 5, 2024 3:00 PM",
            "source": "Platform",
            "customerType": "Returning/Revisit",
            "amountGiven": 3000.00,
            "technicianAssigned": "GardenerTech3"
          }
           
        ]
      },
      {
        "name": "Akhil Mehta",
        "email": "akhil.mehta@example.com",
        "phone": "+91 76543 87654",
        "address": "25 Janpath, New Delhi, DL, 110009",
        "serviceRequests": [
          {
            "serviceType": "Gardener",
            "status": "Pending",
            "rating": null,
            "review": null,
            "requestDate": "January 6, 2024 12:45 PM",
            "completionDate": null,
            "source": "Web Link",
            "customerType": "Returning/Revisit",
            "amountGiven": 0.00,
            "technicianAssigned": "GardenerTech2"
          },
          {
            "serviceType": "Electrician",
            "status": "Completed",
            "rating": 4,
            "review": "Good electrical service. The issue was resolved efficiently.",
            "requestDate": "January 3, 2024 10:15 AM",
            "completionDate": "January 3, 2024 11:45 AM",
            "source": "Walk-in",
            "customerType": "New Customer",
            "amountGiven": 2400.00,
            "technicianAssigned": "ElectricianTech2"
          }
           
        ]
      },
      {
        "name": "Anjali Kapoor",
        "email": "anjali.kapoor@example.com",
        "phone": "+91 98765 54321",
        "address": "42 Rajendra Nagar, Mumbai, MH, 400010",
        "serviceRequests": [
          {
            "serviceType": "Cook",
            "status": "Completed",
            "rating": 4,
            "review": "Satisfactory cooking service. The taste was good.",
            "requestDate": "January 1, 2024 9:15 AM",
            "completionDate": "January 1, 2024 10:45 AM",
            "source": "Platform",
            "customerType": "Returning/Revisit",
            "amountGiven": 2200.00,
            "technicianAssigned": "CookTech1"
          },
          {
            "serviceType": "Plumber",
            "status": "Pending",
            "rating": null,
            "review": null,
            "requestDate": "January 5, 2024 3:30 PM",
            "completionDate": null,
            "source": "Platform",
            "customerType": "New Customer",
            "amountGiven": 0.00,
            "technicianAssigned": "PlumberTech1"
          }
           
        ]
      },
      {
        "name": "Rajendra Khanna",
        "email": "rajendra.khanna@example.com",
        "phone": "+91 87654 76543",
        "address": "8 MG Road, Bangalore, KA, 560011",
        "serviceRequests": [
          {
            "serviceType": "Cook",
            "status": "Pending",
            "rating": null,
            "review": null,
            "requestDate": "January 6, 2024 11:45 AM",
            "completionDate": null,
            "source": "Walk-in",
            "customerType": "Returning/Revisit",
            "amountGiven": 0.00,
            "technicianAssigned": "CookTech3"
          },
          {
            "serviceType": "Plumber",
            "status": "Completed",
            "rating": 3,
            "review": "Satisfactory plumbing service. Fixed the issues on time.",
            "requestDate": "January 3, 2024 10:30 AM",
            "completionDate": "January 3, 2024 12:00 PM",
            "source": "Web Link",
            "customerType": "Returning/Revisit",
            "amountGiven": 1800.00,
            "technicianAssigned": "PlumberTech3"
          }
           
        ]
      },
      {
        "name": "Aditi Verma",
        "email": "aditi.verma@example.com",
        "phone": "+91 76543 87654",
        "address": "18 Rajaji Street, Chennai, TN, 600001",
        "serviceRequests": [
          {
            "serviceType": "Cook",
            "status": "Pending",
            "rating": null,
            "review": null,
            "requestDate": "January 1, 2024 10:45 AM",
            "completionDate": null,
            "source": "Web Link",
            "customerType": "Returning/Revisit",
            "amountGiven": 0.00,
            "technicianAssigned": "CookTech2"
          },
          {
            "serviceType": "Electrician",
            "status": "Completed",
            "rating": 4,
            "review": "Good electrical service. The issue was resolved efficiently.",
            "requestDate": "January 5, 2024 12:15 PM",
            "completionDate": "January 5, 2024 1:45 PM",
            "source": "Walk-in",
            "customerType": "New Customer",
            "amountGiven": 2400.00,
            "technicianAssigned": "ElectricianTech2"
          }
           
        ]
      },
      {
        "name": "Ananya Sinha",
        "email": "ananya.sinha@example.com",
        "phone": "+91 98765 87654",
        "address": "22 Gandhi Road, Mumbai, MH, 400011",
        "serviceRequests": [
          {
            "serviceType": "Electrician",
            "status": "Completed",
            "rating": 5,
            "review": "Outstanding electrical service! The technician was highly skilled.",
            "requestDate": "January 6, 2024 11:45 AM",
            "completionDate": "January 6, 2024 1:15 PM",
            "source": "Platform",
            "customerType": "Returning/Revisit",
            "amountGiven": 2500.00,
            "technicianAssigned": "ElectricianTech3"
          },
          {
            "serviceType": "Gardener",
            "status": "Completed",
            "rating": 4,
            "review": "Great job in maintaining the garden. Pleased with the service.",
            "requestDate": "January 3, 2024 2:30 PM",
            "completionDate": "January 3, 2024 4:00 PM",
            "source": "Walk-in",
            "customerType": "New Customer",
            "amountGiven": 2500.00,
            "technicianAssigned": "GardenerTech1"
          }
           
        ]
      },
      {
        "name": "Sumit Kapoor",
        "email": "sumit.kapoor@example.com",
        "phone": "+91 87654 54321",
        "address": "35 Civil Lines, Lucknow, UP, 226002",
        "serviceRequests": [
          {
            "serviceType": "Gardener",
            "status": "Pending",
            "rating": null,
            "review": null,
            "requestDate": "January 1, 2024 12:15 PM",
            "completionDate": null,
            "source": "Walk-in",
            "customerType": "Returning/Revisit",
            "amountGiven": 0.00,
            "technicianAssigned": "GardenerTech3"
          },
          {
            "serviceType": "Plumber",
            "status": "Completed",
            "rating": 4,
            "review": "Satisfied with the plumbing service. Timely and professional.",
            "requestDate": "January 5, 2024 10:30 AM",
            "completionDate": "January 5, 2024 12:00 PM",
            "source": "Platform",
            "customerType": "New Customer",
            "amountGiven": 2600.00,
            "technicianAssigned": "PlumberTech3"
          }
           
        ]
      },
      {
        "name": "Sonia Gupta",
        "email": "sonia.gupta@example.com",
        "phone": "+91 87654 76543",
        "address": "8 MG Road, Bangalore, KA, 560012",
        "serviceRequests": [
          {
            "serviceType": "Plumber",
            "status": "Pending",
            "rating": null,
            "review": null,
            "requestDate": "January 1, 2024 11:30 AM",
            "completionDate": null,
            "source": "Platform",
            "customerType": "New Customer",
            "amountGiven": 0.00,
            "technicianAssigned": "PlumberTech2"
          },
          {
            "serviceType": "Gardener",
            "status": "Completed",
            "rating": 4,
            "review": "Great gardening service! The garden looks amazing.",
            "requestDate": "January 5, 2024 1:00 PM",
            "completionDate": "January 5, 2024 2:45 PM",
            "source": "Walk-in",
            "customerType": "Returning/Revisit",
            "amountGiven": 1800.00,
            "technicianAssigned": "GardenerTech2"
          }
           
        ]
      },
      {
        "name": "Rahul Mehta",
        "email": "rahul.mehta@example.com",
        "phone": "+91 76543 87654",
        "address": "22 Civil Lines, Jaipur, RJ, 302007",
        "serviceRequests": [
          {
            "serviceType": "Electrician",
            "status": "Completed",
            "rating": 5,
            "review": "Outstanding electrical service! The technician was highly skilled.",
            "requestDate": "January 6, 2024 10:45 AM",
            "completionDate": "January 6, 2024 12:30 PM",
            "source": "Platform",
            "customerType": "Returning/Revisit",
            "amountGiven": 2500.00,
            "technicianAssigned": "ElectricianTech3"
          },
          {
            "serviceType": "Cook",
            "status": "Pending",
            "rating": null,
            "review": null,
            "requestDate": "January 3, 2024 3:30 PM",
            "completionDate": null,
            "source": "Platform",
            "customerType": "Returning/Revisit",
            "amountGiven": 0.00,
            "technicianAssigned": "CookTech3"
          }
           
        ]
      },
      {
        "name": "Kiran Shah",
        "email": "kiran.shah@example.com",
        "phone": "+91 98765 67890",
        "address": "18 Gandhi Road, Ahmedabad, GJ, 380010",
        "serviceRequests": [
          {
            "serviceType": "Gardener",
            "status": "Pending",
            "rating": null,
            "review": null,
            "requestDate": "January 1, 2024 12:15 PM",
            "completionDate": null,
            "source": "Walk-in",
            "customerType": "Returning/Revisit",
            "amountGiven": 0.00,
            "technicianAssigned": "GardenerTech3"
          },
          {
            "serviceType": "Plumber",
            "status": "Completed",
            "rating": 4,
            "review": "The plumber did a good job fixing the leaks.",
            "requestDate": "January 5, 2024 2:00 PM",
            "completionDate": "January 5, 2024 3:30 PM",
            "source": "Platform",
            "customerType": "New Customer",
            "amountGiven": 2000.00,
            "technicianAssigned": "PlumberTech3"
          }
           
        ]
      },
      {
        "name": "Pooja Gupta",
        "email": "pooja.gupta@example.com",
        "phone": "+91 87654 54321",
        "address": "35 Sardar Patel Nagar, Pune, MH, 411010",
        "serviceRequests": [
          {
            "serviceType": "Cook",
            "status": "Completed",
            "rating": 3,
            "review": "Average cooking service. Expected better.",
            "requestDate": "January 6, 2024 11:30 AM",
            "completionDate": "January 6, 2024 1:15 PM",
            "source": "Web Link",
            "customerType": "Returning/Revisit",
            "amountGiven": 1200.00,
            "technicianAssigned": "CookTech1"
          },
          {
            "serviceType": "Electrician",
            "status": "Pending",
            "rating": null,
            "review": null,
            "requestDate": "January 3, 2024 3:30 PM",
            "completionDate": null,
            "source": "Walk-in",
            "customerType": "New Customer",
            "amountGiven": 0.00,
            "technicianAssigned": "ElectricianTech1"
          }
           
        ]
      },
      {
        "name": "Vikas Mehta",
        "email": "vikas.mehta@example.com",
        "phone": "+91 76543 87654",
        "address": "25 Janpath, New Delhi, DL, 110009",
        "serviceRequests": [
          {
            "serviceType": "Cook",
            "status": "Pending",
            "rating": null,
            "review": null,
            "requestDate": "January 1, 2024 10:45 AM",
            "completionDate": null,
            "source": "Web Link",
            "customerType": "Returning/Revisit",
            "amountGiven": 0.00,
            "technicianAssigned": "CookTech2"
          },
          {
            "serviceType": "Plumber",
            "status": "Completed",
            "rating": 5,
            "review": "Excellent plumbing service! Fixed the issues quickly.",
            "requestDate": "January 5, 2024 12:15 PM",
            "completionDate": "January 5, 2024 2:00 PM",
            "source": "Walk-in",
            "customerType": "Returning/Revisit",
            "amountGiven": 2000.00,
            "technicianAssigned": "PlumberTech2"
          }
           
        ]
      },
      {
        "name": "Amit Sharma",
        "email": "amit.sharma@example.com",
        "phone": "+91 98765 54321",
        "address": "42 Rajendra Nagar, Mumbai, MH, 400009",
        "serviceRequests": [
          {
            "serviceType": "Gardener",
            "status": "Completed",
            "rating": 4,
            "review": "The gardener did an excellent job. The garden looks beautiful.",
            "requestDate": "January 6, 2024 2:00 PM",
            "completionDate": "January 6, 2024 3:30 PM",
            "source": "Web Link",
            "customerType": "Returning/Revisit",
            "amountGiven": 2000.00,
            "technicianAssigned": "GardenerTech1"
          },
          {
            "serviceType": "Electrician",
            "status": "Pending",
            "rating": null,
            "review": null,
            "requestDate": "January 3, 2024 11:30 AM",
            "completionDate": null,
            "source": "Platform",
            "customerType": "New Customer",
            "amountGiven": 0.00,
            "technicianAssigned": "ElectricianTech1"
          }
           
        ]
      },
      {
        "name": "Rajendra Khanna",
        "email": "rajendra.khanna@example.com",
        "phone": "+91 87654 76543",
        "address": "8 MG Road, Bangalore, KA, 560010",
        "serviceRequests": [
          {
            "serviceType": "Cook",
            "status": "Pending",
            "rating": null,
            "review": null,
            "requestDate": "January 1, 2024 3:30 PM",
            "completionDate": null,
            "source": "Walk-in",
            "customerType": "Returning/Revisit",
            "amountGiven": 0.00,
            "technicianAssigned": "CookTech3"
          },
          {
            "serviceType": "Plumber",
            "status": "Completed",
            "rating": 3,
            "review": "Satisfactory plumbing service. Fixed the issues on time.",
            "requestDate": "January 5, 2024 10:45 AM",
            "completionDate": "January 5, 2024 12:30 PM",
            "source": "Web Link",
            "customerType": "Returning/Revisit",
            "amountGiven": 1800.00,
            "technicianAssigned": "PlumberTech3"
          }
           
        ]
      },
      {
        "name": "Rohit Kumar",
        "email": "rohit.kumar@example.com",
        "phone": "+91 98765 67890",
        "address": "18 Gandhi Road, Ahmedabad, GJ, 380009",
        "serviceRequests": [
          {
            "serviceType": "Gardener",
            "status": "Pending",
            "rating": null,
            "review": null,
            "requestDate": "January 1, 2024 12:15 PM",
            "completionDate": null,
            "source": "Walk-in",
            "customerType": "Returning/Revisit",
            "amountGiven": 0.00,
            "technicianAssigned": "GardenerTech3"
          },
          {
            "serviceType": "Plumber",
            "status": "Completed",
            "rating": 4,
            "review": "The plumber did a good job fixing the leaks.",
            "requestDate": "January 5, 2024 2:00 PM",
            "completionDate": "January 5, 2024 3:30 PM",
            "source": "Platform",
            "customerType": "New Customer",
            "amountGiven": 2000.00,
            "technicianAssigned": "PlumberTech3"
          }
           
        ]
      },
      {
        "name": "Neha Gupta",
        "email": "neha.gupta@example.com",
        "phone": "+91 87654 54321",
        "address": "35 Sardar Patel Nagar, Pune, MH, 411009",
        "serviceRequests": [
          {
            "serviceType": "Cook",
            "status": "Completed",
            "rating": 2,
            "review": "Unsatisfactory cooking service. The taste was not up to the mark.",
            "requestDate": "January 6, 2024 11:30 AM",
            "completionDate": "January 6, 2024 1:15 PM",
            "source": "Web Link",
            "customerType": "Returning/Revisit",
            "amountGiven": 1200.00,
            "technicianAssigned": "CookTech1"
          },
          {
            "serviceType": "Electrician",
            "status": "Pending",
            "rating": null,
            "review": null,
            "requestDate": "January 3, 2024 3:30 PM",
            "completionDate": null,
            "source": "Walk-in",
            "customerType": "New Customer",
            "amountGiven": 0.00,
            "technicianAssigned": "ElectricianTech1"
          }
           
        ]
      },
      {
        "name": "Vikas Mehta",
        "email": "vikas.mehta@example.com",
        "phone": "+91 76543 87654",
        "address": "25 Janpath, New Delhi, DL, 110009",
        "serviceRequests": [
          {
            "serviceType": "Cook",
            "status": "Pending",
            "rating": null,
            "review": null,
            "requestDate": "January 1, 2024 10:45 AM",
            "completionDate": null,
            "source": "Web Link",
            "customerType": "Returning/Revisit",
            "amountGiven": 0.00,
            "technicianAssigned": "CookTech2"
          },
          {
            "serviceType": "Plumber",
            "status": "Completed",
            "rating": 5,
            "review": "Excellent plumbing service! Fixed the issues quickly.",
            "requestDate": "January 5, 2024 12:15 PM",
            "completionDate": "January 5, 2024 2:00 PM",
            "source": "Walk-in",
            "customerType": "Returning/Revisit",
            "amountGiven": 2000.00,
            "technicianAssigned": "PlumberTech2"
          }
           
        ]
      },
      {
        "name": "Ayesha Khan",
        "email": "ayesha.khan@example.com",
        "phone": "+91 87654 76543",
        "address": "12 Gandhi Road, Bhopal, MP, 462009",
        "serviceRequests": [
          {
            "serviceType": "Cook",
            "status": "Completed",
            "rating": 3,
            "review": "Average cooking service. Expected better.",
            "requestDate": "January 6, 2024 11:30 AM",
            "completionDate": "January 6, 2024 1:15 PM",
            "source": "Platform",
            "customerType": "New Customer",
            "amountGiven": 1500.00,
            "technicianAssigned": "CookTech3"
          },
          {
            "serviceType": "Electrician",
            "status": "Pending",
            "rating": null,
            "review": null,
            "requestDate": "January 3, 2024 3:30 PM",
            "completionDate": null,
            "source": "Walk-in",
            "customerType": "New Customer",
            "amountGiven": 0.00,
            "technicianAssigned": "ElectricianTech3"
          }
           
        ]
      },
      {
        "name": "Sunita Verma",
        "email": "sunita.verma@example.com",
        "phone": "+91 98765 54321",
        "address": "30 MG Road, Mumbai, MH, 400008",
        "serviceRequests": [
          {
            "serviceType": "Gardener",
            "status": "Completed",
            "rating": 5,
            "review": "Fantastic gardening service! The garden looks stunning.",
            "requestDate": "December 31, 2023 2:00 PM",
            "completionDate": "December 31, 2023 3:30 PM",
            "source": "Web Link",
            "customerType": "Returning/Revisit",
            "amountGiven": 2200.00,
            "technicianAssigned": "GardenerTech2"
          },
          {
            "serviceType": "Electrician",
            "status": "Pending",
            "rating": null,
            "review": null,
            "requestDate": "December 27, 2023 11:30 AM",
            "completionDate": null,
            "source": "Platform",
            "customerType": "New Customer",
            "amountGiven": 0.00,
            "technicianAssigned": "ElectricianTech2"
          }
           
        ]
      },
      {
        "name": "Anil Kumar",
        "email": "anil.kumar@example.com",
        "phone": "+91 87654 76543",
        "address": "5 Civil Lines, Bangalore, KA, 560011",
        "serviceRequests": [
          {
            "serviceType": "Cook",
            "status": "Pending",
            "rating": null,
            "review": null,
            "requestDate": "January 1, 2024 3:30 PM",
            "completionDate": null,
            "source": "Walk-in",
            "customerType": "Returning/Revisit",
            "amountGiven": 0.00,
            "technicianAssigned": "CookTech1"
          },
          {
            "serviceType": "Plumber",
            "status": "Completed",
            "rating": 4,
            "review": "The plumber provided good service. Satisfied with the work.",
            "requestDate": "January 5, 2024 10:45 AM",
            "completionDate": "January 5, 2024 12:30 PM",
            "source": "Web Link",
            "customerType": "Returning/Revisit",
            "amountGiven": 1900.00,
            "technicianAssigned": "PlumberTech1"
          }
           
        ]
      },
      {
        "name": "Mala Sinha",
        "email": "mala.sinha@example.com",
        "phone": "+91 98765 67890",
        "address": "22 Gandhi Road, Ahmedabad, GJ, 380008",
        "serviceRequests": [
          {
            "serviceType": "Gardener",
            "status": "Pending",
            "rating": null,
            "review": null,
            "requestDate": "January 1, 2024 12:15 PM",
            "completionDate": null,
            "source": "Walk-in",
            "customerType": "Returning/Revisit",
            "amountGiven": 0.00,
            "technicianAssigned": "GardenerTech3"
          },
          {
            "serviceType": "Plumber",
            "status": "Completed",
            "rating": 5,
            "review": "Exceptional plumbing service! The technician was very skilled.",
            "requestDate": "January 5, 2024 2:00 PM",
            "completionDate": "January 5, 2024 3:30 PM",
            "source": "Platform",
            "customerType": "New Customer",
            "amountGiven": 2100.00,
            "technicianAssigned": "PlumberTech3"
          }
           
        ]
      },
      {
        "name": "Rajiv Kapoor",
        "email": "rajiv.kapoor@example.com",
        "phone": "+91 87654 54321",
        "address": "40 Sardar Patel Nagar, Pune, MH, 411008",
        "serviceRequests": [
          {
            "serviceType": "Cook",
            "status": "Completed",
            "rating": 3,
            "review": "Average cooking service. Expected better.",
            "requestDate": "January 6, 2024 11:30 AM",
            "completionDate": "January 6, 2024 1:15 PM",
            "source": "Web Link",
            "customerType": "Returning/Revisit",
            "amountGiven": 1300.00,
            "technicianAssigned": "CookTech2"
          },
          {
            "serviceType": "Electrician",
            "status": "Pending",
            "rating": null,
            "review": null,
            "requestDate": "January 3, 2024 3:30 PM",
            "completionDate": null,
            "source": "Walk-in",
            "customerType": "New Customer",
            "amountGiven": 0.00,
            "technicianAssigned": "ElectricianTech2"
          }
           
        ]
      },
      {
        "name": "Alok Mehta",
        "email": "alok.mehta@example.com",
        "phone": "+91 76543 87654",
        "address": "18 Janpath, New Delhi, DL, 110008",
        "serviceRequests": [
          {
            "serviceType": "Cook",
            "status": "Pending",
            "rating": null,
            "review": null,
            "requestDate": "January 1, 2024 10:45 AM",
            "completionDate": null,
            "source": "Web Link",
            "customerType": "Returning/Revisit",
            "amountGiven": 0.00,
            "technicianAssigned": "CookTech3"
          },
          {
            "serviceType": "Plumber",
            "status": "Completed",
            "rating": 5,
            "review": "Excellent plumbing service! Fixed the issues quickly.",
            "requestDate": "January 5, 2024 12:15 PM",
            "completionDate": "January 5, 2024 2:00 PM",
            "source": "Walk-in",
            "customerType": "Returning/Revisit",
            "amountGiven": 2200.00,
            "technicianAssigned": "PlumberTech3"
          }
           
        ]
      },
      {
        "name": "Manish Singh",
        "email": "manish.singh@example.com",
        "phone": "+91 98765 54321",
        "address": "15 MG Road, Mumbai, MH, 400007",
        "serviceRequests": [
          {
            "serviceType": "Gardener",
            "status": "Completed",
            "rating": 3,
            "review": "Average gardening service. Expected better.",
            "requestDate": "January 3, 2024 2:00 PM",
            "completionDate": "January 3, 2024 3:30 PM",
            "source": "Web Link",
            "customerType": "Returning/Revisit",
            "amountGiven": 1500.00,
            "technicianAssigned": "GardenerTech1"
          }
           
        ]
      },
      {
        "name": "Preeti Verma",
        "email": "preeti.verma@example.com",
        "phone": "+91 87654 76543",
        "address": "10 Civil Lines, Bangalore, KA, 560012",
        "serviceRequests": [
          {
            "serviceType": "Cook",
            "status": "Completed",
            "rating": 5,
            "review": "Outstanding cooking service! The taste exceeded expectations.",
            "requestDate": "December 31, 2023 3:30 PM",
            "completionDate": "December 31, 2023 5:00 PM",
            "source": "Platform",
            "customerType": "New Customer",
            "amountGiven": 2500.00,
            "technicianAssigned": "CookTech1"
          }
           
        ]
      },
      {
        "name": "Nitin Kapoor",
        "email": "nitin.kapoor@example.com",
        "phone": "+91 98765 67890",
        "address": "28 Gandhi Road, Ahmedabad, GJ, 380007",
        "serviceRequests": [
          {
            "serviceType": "Gardener",
            "status": "Completed",
            "rating": 4,
            "review": "Good gardening service. The plants look healthier now.",
            "requestDate": "January 1, 2024 12:15 PM",
            "completionDate": "January 1, 2024 1:45 PM",
            "source": "Walk-in",
            "customerType": "Returning/Revisit",
            "amountGiven": 1800.00,
            "technicianAssigned": "GardenerTech2"
          }
           
        ]
      },
      {
        "name": "Ritu Singh",
        "email": "ritu.singh@example.com",
        "phone": "+91 87654 54321",
        "address": "48 Sardar Patel Nagar, Pune, MH, 411007",
        "serviceRequests": [
          {
            "serviceType": "Electrician",
            "status": "Completed",
            "rating": 2,
            "review": "Unsatisfactory electrical service. The issue persists.",
            "requestDate": "January 5, 2024 11:30 AM",
            "completionDate": "January 5, 2024 1:15 PM",
            "source": "Web Link",
            "customerType": "New Customer",
            "amountGiven": 1400.00,
            "technicianAssigned": "ElectricianTech2"
          }
           
        ]
      },
      {
        "name": "Sneha Khanna",
        "email": "sneha.khanna@example.com",
        "phone": "+91 76543 87654",
        "address": "20 Janpath, New Delhi, DL, 110007",
        "serviceRequests": [
          {
            "serviceType": "Plumber",
            "status": "Completed",
            "rating": 4,
            "review": "Satisfactory plumbing service. Fixed the issues on time.",
            "requestDate": "January 6, 2024 2:00 PM",
            "completionDate": "January 6, 2024 3:30 PM",
            "source": "Walk-in",
            "customerType": "Returning/Revisit",
            "amountGiven": 2000.00,
            "technicianAssigned": "PlumberTech2"
          }
           
        ]
      },
      {
        "name": "Karan Mehta",
        "email": "karan.mehta@example.com",
        "phone": "+91 98765 43210",
        "address": "22 Rajendra Nagar, Mumbai, MH, 400006",
        "serviceRequests": [
          {
            "serviceType": "Cook",
            "status": "Completed",
            "rating": 5,
            "review": "Fantastic cooking service! The flavors were exceptional.",
            "requestDate": "January 3, 2024 3:30 PM",
            "completionDate": "January 3, 2024 5:00 PM",
            "source": "Platform",
            "customerType": "New Customer",
            "amountGiven": 2500.00,
            "technicianAssigned": "CookTech2"
          }
           
        ]
      },
      {
        "name": "Mohan Kapoor",
        "email": "mohan.kapoor@example.com",
        "phone": "+91 87654 32109",
        "address": "14 Civil Lines, Bangalore, KA, 560013",
        "serviceRequests": [
          {
            "serviceType": "Gardener",
            "status": "Completed",
            "rating": 3,
            "review": "Average gardening service. Expected better.",
            "requestDate": "January 1, 2024 12:15 PM",
            "completionDate": "January 1, 2024 1:45 PM",
            "source": "Walk-in",
            "customerType": "Returning/Revisit",
            "amountGiven": 1800.00,
            "technicianAssigned": "GardenerTech3"
          }
           
        ]
      },
      {
        "name": "Aarti Sinha",
        "email": "aarti.sinha@example.com",
        "phone": "+91 76543 98765",
        "address": "33 Gandhi Road, Ahmedabad, GJ, 380006",
        "serviceRequests": [
          {
            "serviceType": "Cook",
            "status": "Completed",
            "rating": 4,
            "review": "Good cooking service. The food was delicious.",
            "requestDate": "January 5, 2024 11:30 AM",
            "completionDate": "January 5, 2024 1:15 PM",
            "source": "Web Link",
            "customerType": "Returning/Revisit",
            "amountGiven": 2000.00,
            "technicianAssigned": "CookTech3"
          }
           
        ]
      },
      {
        "name": "Arjun Verma",
        "email": "arjun.verma@example.com",
        "phone": "+91 98765 87654",
        "address": "25 Sardar Patel Nagar, Pune, MH, 411006",
        "serviceRequests": [
          {
            "serviceType": "Electrician",
            "status": "Completed",
            "rating": 2,
            "review": "Unsatisfactory electrical service. The issue persists.",
            "requestDate": "January 6, 2024 11:30 AM",
            "completionDate": "January 6, 2024 1:15 PM",
            "source": "Walk-in",
            "customerType": "New Customer",
            "amountGiven": 1400.00,
            "technicianAssigned": "ElectricianTech3"
          }
           
        ]
      },
      {
        "name": "Neha Mehta",
        "email": "neha.mehta@example.com",
        "phone": "+91 87654 98765",
        "address": "18 Janpath, New Delhi, DL, 110006",
        "serviceRequests": [
          {
            "serviceType": "Plumber",
            "status": "Completed",
            "rating": 5,
            "review": "Outstanding plumbing service! The technician was skilled.",
            "requestDate": "January 3, 2024 2:00 PM",
            "completionDate": "January 3, 2024 3:30 PM",
            "source": "Platform",
            "customerType": "New Customer",
            "amountGiven": 2200.00,
            "technicianAssigned": "PlumberTech3"
          }
           
        ]
      },
      {
        "name": "Shweta Khanna",
        "email": "shweta.khanna@example.com",
        "phone": "+91 76543 87654",
        "address": "20 Janpath, New Delhi, DL, 110007",
        "serviceRequests": [
          {
            "serviceType": "Electrician",
            "status": "Completed",
            "rating": 4,
            "review": "Satisfactory electrical service. The issue was resolved.",
            "requestDate": "January 1, 2024 11:30 AM",
            "completionDate": "January 3, 2024 1:15 PM",
            "source": "Web Link",
            "customerType": "Returning/Revisit",
            "amountGiven": 1800.00,
            "technicianAssigned": "ElectricianTech1"
          }
           
        ]
      },
      {
        "name": "Rajeev Sinha",
        "email": "rajeev.sinha@example.com",
        "phone": "+91 87654 54321",
        "address": "12 Civil Lines, Bangalore, KA, 560014",
        "serviceRequests": [
          {
            "serviceType": "Cook",
            "status": "Completed",
            "rating": 3,
            "review": "Average cooking service. The taste was not up to the mark.",
            "requestDate": "January 5, 2024 3:30 PM",
            "completionDate": "January 5, 2024 5:00 PM",
            "source": "Platform",
            "customerType": "New Customer",
            "amountGiven": 1500.00,
            "technicianAssigned": "CookTech2"
          }
           
        ]
      },
      {
        "name": "Rahul Verma",
        "email": "rahul.verma@example.com",
        "phone": "+91 98765 43210",
        "address": "10 Rajendra Nagar, Mumbai, MH, 400009",
        "serviceRequests": [
          {
            "serviceType": "Gardener",
            "status": "Completed",
            "rating": 5,
            "review": "Exceptional gardening service! The garden looks stunning.",
            "requestDate": "January 6, 2024 12:15 PM",
            "completionDate": "January 6, 2024 1:45 PM",
            "source": "Walk-in",
            "customerType": "Returning/Revisit",
            "amountGiven": 2200.00,
            "technicianAssigned": "GardenerTech3"
          }
           
        ]
      },
      {
        "name": "Kavita Sharma",
        "email": "kavita.sharma@example.com",
        "phone": "+91 87654 32109",
        "address": "22 Gandhi Road, Ahmedabad, GJ, 380009",
        "serviceRequests": [
          {
            "serviceType": "Electrician",
            "status": "Completed",
            "rating": 4,
            "review": "Good electrical service. The problem was fixed efficiently.",
            "requestDate": "January 3, 2024 11:30 AM",
            "completionDate": "January 3, 2024 1:15 PM",
            "source": "Web Link",
            "customerType": "New Customer",
            "amountGiven": 1900.00,
            "technicianAssigned": "ElectricianTech3"
          }
           
        ]
      },
      {
        "name": "Priya Kapoor",
        "email": "priya.kapoor@example.com",
        "phone": "+91 98765 87654",
        "address": "25 Sardar Patel Nagar, Pune, MH, 411009",
        "serviceRequests": [
          {
            "serviceType": "Cook",
            "status": "Completed",
            "rating": 2,
            "review": "Unsatisfactory cooking service. The taste was not good.",
            "requestDate": "January 4, 2024 3:30 PM",
            "completionDate": "January 1, 2024 5:00 PM",
            "source": "Walk-in",
            "customerType": "Returning/Revisit",
            "amountGiven": 1400.00,
            "technicianAssigned": "CookTech3"
          }
           
        ]
      }

      
    ]

    


    export default customers