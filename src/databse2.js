 const customers = 
    [
        {
          "customerId": 1,
          "name": "Harpreet Singh",
          "phone": "+91 98765 43210",
          "address": "Jalandhar, Punjab",
          "customerType": "New",
          "serviceRequests": [
            {
              "serviceId": 1,
              "serviceType": "Cook",
              "status": "Completed",
              "rating": 5,
              "review": "Delicious meals!",
              "requestDate": "January 3, 2024 1:30 PM",
              "TechnicianAssignedDate": "January 3, 2024 2:00 PM",
              "completionDate": "January 3, 2024 4:00 PM",
              "source": "Web Link",
              "amountGiven": 2000.00,
              "technicianAssigned": "CookTech1"
            },
            {
              "serviceId": 2,
              "serviceType": "Gardener",
              "status": "Completed",
              "rating": 4,
              "review": "Good work in the garden.",
              "requestDate": "January 2, 2024 10:30 AM",
              "TechnicianAssignedDate": "January 2, 2024 11:00 AM",
              "completionDate": "January 2, 2024 1:00 PM",
              "source": "Platform",
              "amountGiven": 1200.00,
              "technicianAssigned": "GardenerTech1"
            },
            {
              "serviceId": 3,
              "serviceType": "Electrician",
              "status": "Completed",
              "rating": 5,
              "review": "Great service!",
              "requestDate": "January 1, 2024 9:00 AM",
              "TechnicianAssignedDate": "January 1, 2024 10:00 AM",
              "completionDate": "January 1, 2024 12:00 PM",
              "source": "Web Link",
              "amountGiven": 1500.00,
              "technicianAssigned": "ElectricianTech1"
            }
          ]
        },
        
          {
            "customerId": 2,
            "name": "Amit Sharma",
            "phone": "+91 87654 32109",
            "address": "Amritsar, Punjab",
            "customerType": "Returning",
            "serviceRequests": [
              {
                "serviceId": 1,
                "serviceType": "Electrician",
                "status": "Pending",
                "rating": null,
                "review": null,
                "requestDate": "January 6, 2024 3:00 PM",
                "TechnicianAssignedDate": "January 6, 2024 3:30 PM",
                "completionDate": null,
                "source": "Mobile App",
                "amountGiven": 0.00,
                "technicianAssigned": "ElectricianTech2"
              }
            ]
          },
          {
            "customerId": 3,
            "name": "Ranjit Kaur",
            "phone": "+91 76543 21098",
            "address": "Ludhiana, Punjab",
            "customerType": "New",
            "serviceRequests": [
              {
                "serviceId": 1,
                "serviceType": "Plumber",
                "status": "Completed",
                "rating": 4,
                "review": "Fixed the plumbing issue.",
                "requestDate": "January 7, 2024 11:00 AM",
                "TechnicianAssignedDate": "January 7, 2024 11:30 AM",
                "completionDate": "January 7, 2024 1:30 PM",
                "source": "Walk-in",
                "amountGiven": 1800.00,
                "technicianAssigned": "PlumberTech1"
              }
            ]
          },
          {
            "customerId": 4,
            "name": "Meena Gupta",
            "phone": "+91 98765 10987",
            "address": "Chandigarh, Punjab",
            "customerType": "Returning",
            "serviceRequests": [
              {
                "serviceId": 1,
                "serviceType": "Cook",
                "status": "Pending",
                "rating": null,
                "review": null,
                "requestDate": "January 8, 2024 2:30 PM",
                "TechnicianAssignedDate": "January 8, 2024 3:00 PM",
                "completionDate": null,
                "source": "Web Link",
                "amountGiven": 0.00,
                "technicianAssigned": "CookTech2"
              }
            ]
          },
          {
            "customerId": 5,
            "name": "Rajiv Verma",
            "phone": "+91 87654 32198",
            "address": "Patiala, Punjab",
            "customerType": "New",
            "serviceRequests": [
              {
                "serviceId": 1,
                "serviceType": "Gardener",
                "status": "Completed",
                "rating": 5,
                "review": "Beautiful garden now!",
                "requestDate": "January 9, 2024 10:00 AM",
                "TechnicianAssignedDate": "January 9, 2024 10:30 AM",
                "completionDate": "January 9, 2024 12:30 PM",
                "source": "Platform",
                "amountGiven": 1300.00,
                "technicianAssigned": "GardenerTech2"
              }
            ]
          },
            {
              "customerId": 6,
              "name": "Rahul Malik",
              "phone": "+91 87654 32109",
              "address": "Jalandhar, Punjab",
              "customerType": "New",
              "serviceRequests": [
                {
                  "serviceId": 1,
                  "serviceType": "Plumber",
                  "status": "Completed",
                  "rating": 5,
                  "review": "Fixed the plumbing issue quickly!",
                  "requestDate": "January 3, 2024 11:00 AM",
                  "TechnicianAssignedDate": "January 3, 2024 11:30 AM",
                  "completionDate": "January 3, 2024 1:30 PM",
                  "source": "Walk-in",
                  "amountGiven": 1800.00,
                  "technicianAssigned": "PlumberTech1"
                }
              ]
            },
            {
              "customerId": 7,
              "name": "Anjali Choudhary",
              "phone": "+91 76543 21098",
              "address": "Ludhiana, Punjab",
              "customerType": "Returning",
              "serviceRequests": [
                {
                  "serviceId": 1,
                  "serviceType": "Gardener",
                  "status": "Completed",
                  "rating": 4,
                  "review": "Beautiful garden, thanks!",
                  "requestDate": "January 4, 2024 10:30 AM",
                  "TechnicianAssignedDate": "January 4, 2024 11:00 AM",
                  "completionDate": "January 4, 2024 12:30 PM",
                  "source": "Mobile App",
                  "amountGiven": 1500.00,
                  "technicianAssigned": "GardenerTech2"
                }
              ]
            },
            {
              "customerId": 8,
              "name": "Sumit Kapoor",
              "phone": "+91 98765 43210",
              "address": "Amritsar, Punjab",
              "customerType": "New",
              "serviceRequests": [
                {
                  "serviceId": 1,
                  "serviceType": "Cook",
                  "status": "Pending",
                  "rating": null,
                  "review": null,
                  "requestDate": "January 5, 2024 2:30 PM",
                  "TechnicianAssignedDate": "January 5, 2024 3:00 PM",
                  "completionDate": null,
                  "source": "Mobile App",
                  "amountGiven": 0.00,
                  "technicianAssigned": "CookTech2"
                }
              ]
            },
            {
              "customerId": 9,
              "name": "Suman Yadav",
              "phone": "+91 87654 32109",
              "address": "Jalandhar, Punjab",
              "customerType": "Returning",
              "serviceRequests": [
                {
                  "serviceId": 1,
                  "serviceType": "Electrician",
                  "status": "Completed",
                  "rating": 5,
                  "review": "Excellent electrical service!",
                  "requestDate": "January 6, 2024 9:00 AM",
                  "TechnicianAssignedDate": "January 6, 2024 9:30 AM",
                  "completionDate": "January 6, 2024 11:00 AM",
                  "source": "Walk-in",
                  "amountGiven": 2000.00,
                  "technicianAssigned": "ElectricianTech2"
                }
              ]
            },
            {
              "customerId": 10,
              "name": "Rahul Kapoor",
              "phone": "+91 76543 21098",
              "address": "Ludhiana, Punjab",
              "customerType": "Returning",
              "serviceRequests": [
                {
                  "serviceId": 1,
                  "serviceType": "Gardener",
                  "status": "Pending",
                  "rating": null,
                  "review": null,
                  "requestDate": "January 7, 2024 2:30 PM",
                  "TechnicianAssignedDate": "January 7, 2024 3:00 PM",
                  "completionDate": null,
                  "source": "Mobile App",
                  "amountGiven": 0.00,
                  "technicianAssigned": "GardenerTech3"
                }
              ]
            },
            {
              "customerId": 11,
              "name": "Priya Malik",
              "phone": "+91 98765 43210",
              "address": "Amritsar, Punjab",
              "customerType": "New",
              "serviceRequests": [
                {
                  "serviceId": 1,
                  "serviceType": "Electrician",
                  "status": "Completed",
                  "rating": 4,
                  "review": "Satisfactory painting work!",
                  "requestDate": "January 8, 2024 9:30 AM",
                  "TechnicianAssignedDate": "January 8, 2024 10:00 AM",
                  "completionDate": "January 8, 2024 11:30 AM",
                  "source": "Walk-in",
                  "amountGiven": 1500.00,
                  "technicianAssigned": "ElectricianTech2"
                }
              ]
            },
            {
              "customerId": 12,
              "name": "Sudhir Verma",
              "phone": "+91 87654 32109",
              "address": "Jalandhar, Punjab",
              "customerType": "Returning",
              "serviceRequests": [
                {
                  "serviceId": 1,
                  "serviceType": "Plumber",
                  "status": "Completed",
                  "rating": 5,
                  "review": "Quick plumbing fix, thank you!",
                  "requestDate": "January 9, 2024 11:00 AM",
                  "TechnicianAssignedDate": "January 9, 2024 11:30 AM",
                  "completionDate": "January 9, 2024 1:30 PM",
                  "source": "Web Link",
                  "amountGiven": 1800.00,
                  "technicianAssigned": "PlumberTech2"
                }
              ]
            },
            {
              "customerId": 13,
              "name": "Amit Singh",
              "phone": "+91 76543 21098",
              "address": "Ludhiana, Punjab",
              "customerType": "New",
              "serviceRequests": [
                {
                  "serviceId": 1,
                  "serviceType": "Gardener",
                  "status": "Completed",
                  "rating": 4,
                  "review": "Nice landscaping work!",
                  "requestDate": "January 4, 2024 9:30 AM",
                  "TechnicianAssignedDate": "January 4, 2024 10:00 AM",
                  "completionDate": "January 4, 2024 11:30 AM",
                  "source": "Web Link",
                  "amountGiven": 1600.00,
                  "technicianAssigned": "GardenerTech4"
                }
              ]
            },
            {
              "customerId": 14,
              "name": "Seema Chauhan",
              "phone": "+91 98765 43210",
              "address": "Amritsar, Punjab",
              "customerType": "Returning",
              "serviceRequests": [
                {
                  "serviceId": 1,
                  "serviceType": "Electrician",
                  "status": "Completed",
                  "rating": 5,
                  "review": "Fixed the electrical issue quickly!",
                  "requestDate": "January 5, 2024 2:00 PM",
                  "TechnicianAssignedDate": "January 5, 2024 2:30 PM",
                  "completionDate": "January 5, 2024 4:00 PM",
                  "source": "Walk-in",
                  "amountGiven": 2000.00,
                  "technicianAssigned": "ElectricianTech3"
                }
              ]
            },
            {
              "customerId": 15,
              "name": "Rajat Sharma",
              "phone": "+91 87654 32109",
              "address": "Jalandhar, Punjab",
              "customerType": "New",
              "serviceRequests": [
                {
                  "serviceId": 1,
                  "serviceType": "Electrician",
                  "status": "Pending",
                  "rating": null,
                  "review": null,
                  "requestDate": "January 6, 2024 10:30 AM",
                  "TechnicianAssignedDate": "January 6, 2024 11:00 AM",
                  "completionDate": null,
                  "source": "Web Link",
                  "amountGiven": 0.00,
                  "technicianAssigned": "ElectricianTech3"
                }
              ]
            },
            {
              "customerId": 16,
              "name": "Meenu Verma",
              "phone": "+91 76543 21098",
              "address": "Ludhiana, Punjab",
              "customerType": "Returning",
              "serviceRequests": [
                {
                  "serviceId": 1,
                  "serviceType": "Plumber",
                  "status": "Completed",
                  "rating": 5,
                  "review": "Excellent plumbing service!",
                  "requestDate": "January 7, 2024 9:00 AM",
                  "TechnicianAssignedDate": "January 7, 2024 9:30 AM",
                  "completionDate": "January 7, 2024 11:00 AM",
                  "source": "Mobile App",
                  "amountGiven": 1800.00,
                  "technicianAssigned": "PlumberTech3"
                }
              ]
            },
            {
              "customerId": 17,
              "name": "Neha Kapoor",
              "phone": "+91 98765 43210",
              "address": "Amritsar, Punjab",
              "customerType": "Returning",
              "serviceRequests": [
                {
                  "serviceId": 1,
                  "serviceType": "Gardener",
                  "status": "Pending",
                  "rating": null,
                  "review": null,
                  "requestDate": "January 8, 2024 2:30 PM",
                  "TechnicianAssignedDate": "January 8, 2024 3:00 PM",
                  "completionDate": null,
                  "source": "Mobile App",
                  "amountGiven": 0.00,
                  "technicianAssigned": "GardenerTech5"
                }
              ]
            },
            {
              "customerId": 18,
              "name": "Rahul Verma",
              "phone": "+91 87654 32109",
              "address": "Jalandhar, Punjab",
              "customerType": "New",
              "serviceRequests": [
                {
                  "serviceId": 1,
                  "serviceType": "Cook",
                  "status": "Completed",
                  "rating": 4,
                  "review": "Delicious meals, loved it!",
                  "requestDate": "January 4, 2024 11:30 AM",
                  "TechnicianAssignedDate": "January 4, 2024 12:00 PM",
                  "completionDate": "January 4, 2024 1:30 PM",
                  "source": "Walk-in",
                  "amountGiven": 2000.00,
                  "technicianAssigned": "cookTech1"
                }
              ]
            },
            {
              "customerId": 19,
              "name": "Kavita Yadav",
              "phone": "+91 76543 21098",
              "address": "Ludhiana, Punjab",
              "customerType": "Returning",
              "serviceRequests": [
                {
                  "serviceId": 1,
                  "serviceType": "Electrician",
                  "status": "Pending",
                  "rating": null,
                  "review": null,
                  "requestDate": "January 5, 2024 2:30 PM",
                  "TechnicianAssignedDate": "January 5, 2024 3:00 PM",
                  "completionDate": null,
                  "source": "Web Link",
                  "amountGiven": 0.00,
                  "technicianAssigned": "ElectricianTech3"
                }
              ]
            },
            {
              "customerId": 20,
              "name": "Vikas Choudhary",
              "phone": "+91 98765 43210",
              "address": "Amritsar, Punjab",
              "customerType": "New",
              "serviceRequests": [
                {
                  "serviceId": 1,
                  "serviceType": "Electrician",
                  "status": "Completed",
                  "rating": 5,
                  "review": "Great painting job!",
                  "requestDate": "January 6, 2024 9:30 AM",
                  "TechnicianAssignedDate": "January 6, 2024 10:00 AM",
                  "completionDate": "January 6, 2024 11:30 AM",
                  "source": "Walk-in",
                  "amountGiven": 2500.00,
                  "technicianAssigned": "ElectricianTech3"
                }
              ]
            },
            {
              "customerId": 21,
              "name": "Suman Ahuja",
              "phone": "+91 87654 32109",
              "address": "Jalandhar, Punjab",
              "customerType": "Returning",
              "serviceRequests": [
                {
                  "serviceId": 1,
                  "serviceType": "Plumber",
                  "status": "Completed",
                  "rating": 4,
                  "review": "Fixed the plumbing issue, satisfied!",
                  "requestDate": "January 7, 2024 9:00 AM",
                  "TechnicianAssignedDate": "January 7, 2024 9:30 AM",
                  "completionDate": "January 7, 2024 11:00 AM",
                  "source": "Web Link",
                  "amountGiven": 1800.00,
                  "technicianAssigned": "plumberTech3"
                }
              ]
            },
            {
              "customerId": 22,
              "name": "Ravi Malhotra",
              "phone": "+91 76543 21098",
              "address": "Ludhiana, Punjab",
              "customerType": "Returning",
              "serviceRequests": [
                {
                  "serviceId": 1,
                  "serviceType": "Gardener",
                  "status": "Pending",
                  "rating": null,
                  "review": null,
                  "requestDate": "January 8, 2024 2:30 PM",
                  "TechnicianAssignedDate": "January 8, 2024 3:00 PM",
                  "completionDate": null,
                  "source": "Mobile App",
                  "amountGiven": 0.00,
                  "technicianAssigned": "GardenerTech6"
                }
              ]
            },
            {
              "customerId": 23,
              "name": "Arun Kumar",
              "phone": "+91 98765 43210",
              "address": "Amritsar, Punjab",
              "customerType": "New",
              "serviceRequests": [
                {
                  "serviceId": 1,
                  "serviceType": "Electrician",
                  "status": "Completed",
                  "rating": 5,
                  "review": "Fast electrical repair service!",
                  "requestDate": "January 5, 2024 2:30 PM",
                  "TechnicianAssignedDate": "January 5, 2024 3:00 PM",
                  "completionDate": "January 5, 2024 4:00 PM",
                  "source": "Walk-in",
                  "amountGiven": 2000.00,
                  "technicianAssigned": "ElectricianTech2"
                }
              ]
            },
            {
              "customerId": 24,
              "name": "Geeta Kapoor",
              "phone": "+91 87654 32109",
              "address": "Jalandhar, Punjab",
              "customerType": "Returning",
              "serviceRequests": [
                {
                  "serviceId": 1,
                  "serviceType": "Electrician",
                  "status": "Pending",
                  "rating": null,
                  "review": null,
                  "requestDate": "January 6, 2024 10:30 AM",
                  "TechnicianAssignedDate": "January 6, 2024 11:00 AM",
                  "completionDate": null,
                  "source": "Web Link",
                  "amountGiven": 0.00,
                  "technicianAssigned": "ElectricianTech3"
                }
              ]
            },
            {
              "customerId": 25,
              "name": "Sandeep Yadav",
              "phone": "+91 76543 21098",
              "address": "Ludhiana, Punjab",
              "customerType": "New",
              "serviceRequests": [
                {
                  "serviceId": 1,
                  "serviceType": "Cook",
                  "status": "Completed",
                  "rating": 4,
                  "review": "Delicious meals, loved it!",
                  "requestDate": "January 4, 2024 11:30 AM",
                  "TechnicianAssignedDate": "January 4, 2024 12:00 PM",
                  "completionDate": "January 4, 2024 1:30 PM",
                  "source": "Walk-in",
                  "amountGiven": 2000.00,
                  "technicianAssigned": "cookTech1"
                }
              ]
            },
            {
              "customerId": 26,
              "name": "Pratik Verma",
              "phone": "+91 98765 43210",
              "address": "Amritsar, Punjab",
              "customerType": "Returning",
              "serviceRequests": [
                {
                  "serviceId": 1,
                  "serviceType": "Plumber",
                  "status": "Completed",
                  "rating": 5,
                  "review": "Excellent plumbing service!",
                  "requestDate": "January 7, 2024 9:00 AM",
                  "TechnicianAssignedDate": "January 7, 2024 9:30 AM",
                  "completionDate": "January 7, 2024 11:00 AM",
                  "source": "Web Link",
                  "amountGiven": 1800.00,
                  "technicianAssigned": "plumberTech3"
                }
              ]
            },
            {
              "customerId": 27,
              "name": "Ananya Singh",
              "phone": "+91 76543 21097",
              "address": "Ludhiana, Punjab",
              "customerType": "Returning",
              "serviceRequests": [
                {
                  "serviceId": 1,
                  "serviceType": "Gardener",
                  "status": "Pending",
                  "rating": null,
                  "review": null,
                  "requestDate": "January 2, 2024 10:00 AM",
                  "TechnicianAssignedDate": "January 2, 2024 10:30 AM",
                  "completionDate": null,
                  "source": "Walk-in",
                  "amountGiven": 0.00,
                  "technicianAssigned": "GardenerTech7"
                }
              ]
            },
            {
              "customerId": 28,
              "name": "Vishal Kapoor",
              "phone": "+91 98765 43211",
              "address": "Amritsar, Punjab",
              "customerType": "New",
              "serviceRequests": [
                {
                  "serviceId": 1,
                  "serviceType": "Electrician",
                  "status": "Completed",
                  "rating": 4,
                  "review": "Solved the electrical issue effectively!",
                  "requestDate": "January 3, 2024 3:30 PM",
                  "TechnicianAssignedDate": "January 3, 2024 4:00 PM",
                  "completionDate": "January 3, 2024 5:30 PM",
                  "source": "Web Link",
                  "amountGiven": 1800.00,
                  "technicianAssigned": "ElectricianTech2"
                }
              ]
            },
            {
              "customerId": 29,
              "name": "Sneha Chauhan",
              "phone": "+91 87654 32110",
              "address": "Jalandhar, Punjab",
              "customerType": "Returning",
              "serviceRequests": [
                {
                  "serviceId": 1,
                  "serviceType": "Electrician",
                  "status": "Pending",
                  "rating": null,
                  "review": null,
                  "requestDate": "January 5, 2024 11:00 AM",
                  "TechnicianAssignedDate": "January 5, 2024 11:30 AM",
                  "completionDate": null,
                  "source": "Mobile App",
                  "amountGiven": 0.00,
                  "technicianAssigned": "ElectricianTech2"
                }
              ]
            },
            {
              "customerId": 30,
              "name": "Rahul Verma",
              "phone": "+91 76543 21096",
              "address": "Ludhiana, Punjab",
              "customerType": "New",
              "serviceRequests": [
                {
                  "serviceId": 1,
                  "serviceType": "Cook",
                  "status": "Completed",
                  "rating": 5,
                  "review": "Delicious meals, loved it!",
                  "requestDate": "January 2, 2024 4:30 PM",
                  "TechnicianAssignedDate": "January 2, 2024 5:00 PM",
                  "completionDate": "January 2, 2024 6:30 PM",
                  "source": "Walk-in",
                  "amountGiven": 2200.00,
                  "technicianAssigned": "cookTech1"
                }
              ]
            },
            {
              "customerId": 31,
              "name": "Amit Sharma",
              "phone": "+91 98765 43212",
              "address": "Amritsar, Punjab",
              "customerType": "Returning",
              "serviceRequests": [
                {
                  "serviceId": 1,
                  "serviceType": "Plumber",
                  "status": "Completed",
                  "rating": 4,
                  "review": "Fixed the plumbing issue, satisfied!",
                  "requestDate": "January 6, 2024 9:30 AM",
                  "TechnicianAssignedDate": "January 6, 2024 10:00 AM",
                  "completionDate": "January 6, 2024 11:30 AM",
                  "source": "Web Link",
                  "amountGiven": 2000.00,
                  "technicianAssigned": "plumberTech3"
                }
              ]
            },
            {
              "customerId": 32,
              "name": "Sonia Malhotra",
              "phone": "+91 87654 32111",
              "address": "Jalandhar, Punjab",
              "customerType": "New",
              "serviceRequests": [
                {
                  "serviceId": 1,
                  "serviceType": "Gardener",
                  "status": "Pending",
                  "rating": null,
                  "review": null,
                  "requestDate": "January 7, 2024 2:30 PM",
                  "TechnicianAssignedDate": "January 7, 2024 3:00 PM",
                  "completionDate": null,
                  "source": "Mobile App",
                  "amountGiven": 0.00,
                  "technicianAssigned": "GardenerTech2"
                }
              ]
            },
            {
              "customerId": 33,
              "name": "Ankit Yadav",
              "phone": "+91 76543 21095",
              "address": "Ludhiana, Punjab",
              "customerType": "Returning",
              "serviceRequests": [
                {
                  "serviceId": 1,
                  "serviceType": "Electrician",
                  "status": "Completed",
                  "rating": 5,
                  "review": "Fast electrical repair service!",
                  "requestDate": "January 8, 2024 2:30 PM",
                  "TechnicianAssignedDate": "January 8, 2024 3:00 PM",
                  "completionDate": "January 8, 2024 4:00 PM",
                  "source": "Walk-in",
                  "amountGiven": 2200.00,
                  "technicianAssigned": "ElectricianTech1"
                }
              ]
            },
            {
              "customerId": 34,
              "name": "Priya Ahuja",
              "phone": "+91 98765 43213",
              "address": "Amritsar, Punjab",
              "customerType": "Returning",
              "serviceRequests": [
                {
                  "serviceId": 1,
                  "serviceType": "Electrician",
                  "status": "Pending",
                  "rating": null,
                  "review": null,
                  "requestDate": "January 9, 2024 10:30 AM",
                  "TechnicianAssignedDate": "January 9, 2024 11:00 AM",
                  "completionDate": null,
                  "source": "Web Link",
                  "amountGiven": 0.00,
                  "technicianAssigned": "ElectricianTech3"
                }
              ]
            },
            {
              "customerId": 35,
              "name": "Akshay Kapoor",
              "phone": "+91 87654 32112",
              "address": "Jalandhar, Punjab",
              "customerType": "New",
              "serviceRequests": [
                {
                  "serviceId": 1,
                  "serviceType": "Cook",
                  "status": "Completed",
                  "rating": 4,
                  "review": "Delicious meals, loved it!",
                  "requestDate": "January 1, 2024 11:30 AM",
                  "TechnicianAssignedDate": "January 1, 2024 12:00 PM",
                  "completionDate": "January 1, 2024 1:30 PM",
                  "source": "Walk-in",
                  "amountGiven": 2000.00,
                  "technicianAssigned": "cookTech3"
                }
              ]
            },
            {
              "customerId": 36,
              "name": "Ritika Verma",
              "phone": "+91 98765 43214",
              "address": "Amritsar, Punjab",
              "customerType": "Returning",
              "serviceRequests": [
                {
                  "serviceId": 1,
                  "serviceType": "Plumber",
                  "status": "Completed",
                  "rating": 5,
                  "review": "Excellent plumbing service!",
                  "requestDate": "January 3, 2024 9:00 AM",
                  "TechnicianAssignedDate": "January 3, 2024 9:30 AM",
                  "completionDate": "January 3, 2024 11:00 AM",
                  "source": "Web Link",
                  "amountGiven": 1800.00,
                  "technicianAssigned": "plumberTech3"
                }
              ]
            },
            {
              "customerId": 37,
              "name": "Nikhil Yadav",
              "phone": "+91 87654 32113",
              "address": "Jalandhar, Punjab",
              "customerType": "New",
              "serviceRequests": [
                {
                  "serviceId": 1,
                  "serviceType": "Gardener",
                  "status": "Pending",
                  "rating": null,
                  "review": null,
                  "requestDate": "January 4, 2024 2:30 PM",
                  "TechnicianAssignedDate": "January 4, 2024 3:00 PM",
                  "completionDate": null,
                  "source": "Mobile App",
                  "amountGiven": 0.00,
                  "technicianAssigned": "GardenerTech1"
                }
              ]
            },
            {
              "customerId": 38,
              "name": "Rajat Malhotra",
              "phone": "+91 98765 43215",
              "address": "Amritsar, Punjab",
              "customerType": "Returning",
              "serviceRequests": [
                {
                  "serviceId": 1,
                  "serviceType": "Electrician",
                  "status": "Completed",
                  "rating": 4,
                  "review": "Solved the electrical issue effectively!",
                  "requestDate": "January 6, 2024 2:30 PM",
                  "TechnicianAssignedDate": "January 6, 2024 3:00 PM",
                  "completionDate": "January 6, 2024 4:00 PM",
                  "source": "Web Link",
                  "amountGiven": 1800.00,
                  "technicianAssigned": "ElectricianTech9"
                }
              ]
            },
            {
              "customerId": 39,
              "name": "Neha Sharma",
              "phone": "+91 87654 32111",
              "address": "Chandigarh, Punjab",
              "customerType": "Returning",
              "serviceRequests": [
                {
                  "serviceId": 1,
                  "serviceType": "Electrician",
                  "status": "Completed",
                  "rating": 5,
                  "review": "Quick electrical fix, satisfied!",
                  "requestDate": "January 3, 2024 2:30 PM",
                  "TechnicianAssignedDate": "January 3, 2024 3:00 PM",
                  "completionDate": "January 3, 2024 4:00 PM",
                  "source": "Web Link",
                  "amountGiven": 2000.00,
                  "technicianAssigned": "ElectricianTech1"
                }
              ]
            },
            {
              "customerId": 40,
              "name": "Ajay Singh",
              "phone": "+91 98765 43212",
              "address": "Amritsar, Punjab",
              "customerType": "New",
              "serviceRequests": [
                {
                  "serviceId": 1,
                  "serviceType": "Electrician",
                  "status": "Pending",
                  "rating": null,
                  "review": null,
                  "requestDate": "January 4, 2024 10:30 AM",
                  "TechnicianAssignedDate": "January 4, 2024 11:00 AM",
                  "completionDate": null,
                  "source": "Web Link",
                  "amountGiven": 0.00,
                  "technicianAssigned": "ElectricianTech1"
                }
              ]
            },
            {
              "customerId": 41,
              "name": "Anita Verma",
              "phone": "+91 87654 32113",
              "address": "Jalandhar, Punjab",
              "customerType": "Returning",
              "serviceRequests": [
                {
                  "serviceId": 1,
                  "serviceType": "Cook",
                  "status": "Completed",
                  "rating": 4,
                  "review": "Delicious meals, loved it!",
                  "requestDate": "January 5, 2024 11:30 AM",
                  "TechnicianAssignedDate": "January 5, 2024 12:00 PM",
                  "completionDate": "January 5, 2024 1:30 PM",
                  "source": "Walk-in",
                  "amountGiven": 2000.00,
                  "technicianAssigned": "cookTech3"
                }
              ]
            },
            {
              "customerId": 42,
              "name": "Rajiv Kapoor",
              "phone": "+91 76543 21095",
              "address": "Ludhiana, Punjab",
              "customerType": "New",
              "serviceRequests": [
                {
                  "serviceId": 1,
                  "serviceType": "Plumber",
                  "status": "Pending",
                  "rating": null,
                  "review": null,
                  "requestDate": "January 6, 2024 10:30 AM",
                  "TechnicianAssignedDate": "January 6, 2024 11:00 AM",
                  "completionDate": null,
                  "source": "Mobile App",
                  "amountGiven": 0.00,
                  "technicianAssigned": "plumberTech1"
                }
              ]
            },
            {
              "customerId": 43,
              "name": "Manoj Yadav",
              "phone": "+91 98765 43215",
              "address": "Amritsar, Punjab",
              "customerType": "Returning",
              "serviceRequests": [
                {
                  "serviceId": 1,
                  "serviceType": "Gardener",
                  "status": "Completed",
                  "rating": 4,
                  "review": "Nice gardening work!",
                  "requestDate": "January 7, 2024 9:30 AM",
                  "TechnicianAssignedDate": "January 7, 2024 10:00 AM",
                  "completionDate": "January 7, 2024 11:30 AM",
                  "source": "Web Link",
                  "amountGiven": 1600.00,
                  "technicianAssigned": "GardenerTech1"
                }
              ]
            },
            {
              "customerId": 44,
              "name": "Shalini Arora",
              "phone": "+91 87654 32118",
              "address": "Chandigarh, Punjab",
              "customerType": "New",
              "serviceRequests": [
                {
                  "serviceId": 1,
                  "serviceType": "Electrician",
                  "status": "Pending",
                  "rating": null,
                  "review": null,
                  "requestDate": "January 8, 2024 2:30 PM",
                  "TechnicianAssignedDate": "January 8, 2024 3:00 PM",
                  "completionDate": null,
                  "source": "Web Link",
                  "amountGiven": 0.00,
                  "technicianAssigned": "ElectricianTech2"
                }
              ]
            },
            {
              "customerId": 45,
              "name": "Amit Sharma",
              "phone": "+91 98765 43222",
              "address": "Amritsar, Punjab",
              "customerType": "Returning",
              "serviceRequests": [
                {
                  "serviceId": 1,
                  "serviceType": "Electrician",
                  "status": "Completed",
                  "rating": 5,
                  "review": "Great painting job!",
                  "requestDate": "January 3, 2024 2:30 PM",
                  "TechnicianAssignedDate": "January 3, 2024 3:00 PM",
                  "completionDate": "January 3, 2024 4:00 PM",
                  "source": "Mobile App",
                  "amountGiven": 2000.00,
                  "technicianAssigned": "ElectricianTech2"
                }
              ]
            },
            {
              "customerId": 46,
              "name": "Kavita Malhotra",
              "phone": "+91 87654 32124",
              "address": "Jalandhar, Punjab",
              "customerType": "New",
              "serviceRequests": [
                {
                  "serviceId": 1,
                  "serviceType": "Cook",
                  "status": "Pending",
                  "rating": null,
                  "review": null,
                  "requestDate": "January 4, 2024 10:30 AM",
                  "TechnicianAssignedDate": "January 4, 2024 11:00 AM",
                  "completionDate": null,
                  "source": "Walk-in",
                  "amountGiven": 0.00,
                  "technicianAssigned": "cookTech3"
                }
              ]
            },
            {
              "customerId": 47,
              "name": "Vikram Kapoor",
              "phone": "+91 98765 43225",
              "address": "Ludhiana, Punjab",
              "customerType": "Returning",
              "serviceRequests": [
                {
                  "serviceId": 1,
                  "serviceType": "Plumber",
                  "status": "Completed",
                  "rating": 4,
                  "review": "Efficient plumbing work!",
                  "requestDate": "January 5, 2024 11:30 AM",
                  "TechnicianAssignedDate": "January 5, 2024 12:00 PM",
                  "completionDate": "January 5, 2024 1:30 PM",
                  "source": "Mobile App",
                  "amountGiven": 1800.00,
                  "technicianAssigned": "plumberTech1"
                }
              ]
            },
            {
              "customerId": 48,
              "name": "Shweta Yadav",
              "phone": "+91 87654 32127",
              "address": "Chandigarh, Punjab",
              "customerType": "New",
              "serviceRequests": [
                {
                  "serviceId": 1,
                  "serviceType": "Gardener",
                  "status": "Pending",
                  "rating": null,
                  "review": null,
                  "requestDate": "January 6, 2024 10:30 AM",
                  "TechnicianAssignedDate": "January 6, 2024 11:00 AM",
                  "completionDate": null,
                  "source": "Web Link",
                  "amountGiven": 0.00,
                  "technicianAssigned": "GardenerTech2"
                }
              ]
            },
            {
              "customerId": 49,
              "name": "Rahul Arora",
              "phone": "+91 98765 43228",
              "address": "Jalandhar, Punjab",
              "customerType": "Returning",
              "serviceRequests": [
                {
                  "serviceId": 1,
                  "serviceType": "Electrician",
                  "status": "Completed",
                  "rating": 5,
                  "review": "Excellent electrical work!",
                  "requestDate": "January 7, 2024 9:30 AM",
                  "TechnicianAssignedDate": "January 7, 2024 10:00 AM",
                  "completionDate": "January 7, 2024 11:30 AM",
                  "source": "Mobile App",
                  "amountGiven": 2000.00,
                  "technicianAssigned": "ElectricianTech11"
                }
              ]
            },
            {
              "customerId": 50,
              "name": "Kiran Kapoor",
              "phone": "+91 87654 32130",
              "address": "Ludhiana, Punjab",
              "customerType": "New",
              "serviceRequests": [
                {
                  "serviceId": 1,
                  "serviceType": "Electrician",
                  "status": "Pending",
                  "rating": null,
                  "review": null,
                  "requestDate": "January 8, 2024 2:30 PM",
                  "TechnicianAssignedDate": "January 8, 2024 3:00 PM",
                  "completionDate": null,
                  "source": "Web Link",
                  "amountGiven": 0.00,
                  "technicianAssigned": "ElectricianTech11"
                }
              ]
            },
            {
              "customerId": 51,
              "name": "Meera Singh",
              "phone": "+91 98765 43231",
              "address": "Amritsar, Punjab",
              "customerType": "Returning",
              "serviceRequests": [
                {
                  "serviceId": 1,
                  "serviceType": "Cook",
                  "status": "Completed",
                  "rating": 4,
                  "review": "Delicious meals, loved it!",
                  "requestDate": "January 2, 2024 11:30 AM",
                  "TechnicianAssignedDate": "January 2, 2024 12:00 PM",
                  "completionDate": "January 2, 2024 1:30 PM",
                  "source": "Web Link",
                  "amountGiven": 1800.00,
                  "technicianAssigned": "cookTech2"
                }
              ]
            },
            {
              "customerId": 52,
              "name": "Sanjay Malhotra",
              "phone": "+91 87654 32133",
              "address": "Jalandhar, Punjab",
              "customerType": "New",
              "serviceRequests": [
                {
                  "serviceId": 1,
                  "serviceType": "Electrician",
                  "status": "Pending",
                  "rating": null,
                  "review": null,
                  "requestDate": "January 3, 2024 10:30 AM",
                  "TechnicianAssignedDate": "January 3, 2024 11:00 AM",
                  "completionDate": null,
                  "source": "Mobile App",
                  "amountGiven": 0.00,
                  "technicianAssigned": "ElectricianTech12"
                }
              ]
            },
            {
              "customerId": 53,
              "name": "Nidhi Kapoor",
              "phone": "+91 98765 43234",
              "address": "Ludhiana, Punjab",
              "customerType": "Returning",
              "serviceRequests": [
                {
                  "serviceId": 1,
                  "serviceType": "Plumber",
                  "status": "Completed",
                  "rating": 5,
                  "review": "Great plumbing work!",
                  "requestDate": "January 4, 2024 2:30 PM",
                  "TechnicianAssignedDate": "January 4, 2024 3:00 PM",
                  "completionDate": "January 4, 2024 4:00 PM",
                  "source": "Web Link",
                  "amountGiven": 2000.00,
                  "technicianAssigned": "plumberTech1"
                }
              ]
            },
            {
              "customerId": 54,
              "name": "Suresh Yadav",
              "phone": "+91 87654 32136",
              "address": "Chandigarh, Punjab",
              "customerType": "New",
              "serviceRequests": [
                {
                  "serviceId": 1,
                  "serviceType": "Gardener",
                  "status": "Pending",
                  "rating": null,
                  "review": null,
                  "requestDate": "January 5, 2024 10:30 AM",
                  "TechnicianAssignedDate": "January 5, 2024 11:00 AM",
                  "completionDate": null,
                  "source": "Walk-in",
                  "amountGiven": 0.00,
                  "technicianAssigned": "GardenerTech2"
                }
              ]
            },
            {
              "customerId": 55,
              "name": "Rohit Arora",
              "phone": "+91 98765 43237",
              "address": "Amritsar, Punjab",
              "customerType": "Returning",
              "serviceRequests": [
                {
                  "serviceId": 1,
                  "serviceType": "Electrician",
                  "status": "Completed",
                  "rating": 4,
                  "review": "Excellent painting work!",
                  "requestDate": "January 6, 2024 9:30 AM",
                  "TechnicianAssignedDate": "January 6, 2024 10:00 AM",
                  "completionDate": "January 6, 2024 11:30 AM",
                  "source": "Web Link",
                  "amountGiven": 1800.00,
                  "technicianAssigned": "ElectricianTech12"
                }
              ]
            },
            {
              "customerId": 56,
              "name": "Divya Kapoor",
              "phone": "+91 87654 32139",
              "address": "Jalandhar, Punjab",
              "customerType": "New",
              "serviceRequests": [
                {
                  "serviceId": 1,
                  "serviceType": "Cook",
                  "status": "Pending",
                  "rating": null,
                  "review": null,
                  "requestDate": "January 7, 2024 2:30 PM",
                  "TechnicianAssignedDate": "January 7, 2024 3:00 PM",
                  "completionDate": null,
                  "source": "Mobile App",
                  "amountGiven": 0.00,
                  "technicianAssigned": "cookTech2"
                }
              ]
            },
            {
              "customerId": 57,
              "name": "Alok Sharma",
              "phone": "+91 98765 43240",
              "address": "Ludhiana, Punjab",
              "customerType": "Returning",
              "serviceRequests": [
                {
                  "serviceId": 1,
                  "serviceType": "Electrician",
                  "status": "Completed",
                  "rating": 5,
                  "review": "Highly skilled electrical work!",
                  "requestDate": "January 8, 2024 11:30 AM",
                  "TechnicianAssignedDate": "January 8, 2024 12:00 PM",
                  "completionDate": "January 8, 2024 1:30 PM",
                  "source": "Web Link",
                  "amountGiven": 2000.00,
                  "technicianAssigned": "ElectricianTech13"
                }
              ]
            },
            {
              "customerId": 58,
              "name": "Neeta Malhotra",
              "phone": "+91 87654 32142",
              "address": "Chandigarh, Punjab",
              "customerType": "New",
              "serviceRequests": [
                {
                  "serviceId": 1,
                  "serviceType": "Gardener",
                  "status": "Pending",
                  "rating": null,
                  "review": null,
                  "requestDate": "January 9, 2024 10:30 AM",
                  "TechnicianAssignedDate": "January 9, 2024 11:00 AM",
                  "completionDate": null,
                  "source": "Walk-in",
                  "amountGiven": 0.00,
                  "technicianAssigned": "GardenerTech1"
                }
              ]
            },
            {
              "customerId": 59,
              "name": "Vivek Yadav",
              "phone": "+91 98765 43243",
              "address": "Amritsar, Punjab",
              "customerType": "Returning",
              "serviceRequests": [
                {
                  "serviceId": 1,
                  "serviceType": "Plumber",
                  "status": "Completed",
                  "rating": 4,
                  "review": "Efficient plumbing work!",
                  "requestDate": "January 2, 2024 2:30 PM",
                  "TechnicianAssignedDate": "January 2, 2024 3:00 PM",
                  "completionDate": "January 2, 2024 4:00 PM",
                  "source": "Web Link",
                  "amountGiven": 1800.00,
                  "technicianAssigned": "plumberTech1"
                }
              ]
            },
            {
              "customerId": 60,
              "name": "Anu Sharma",
              "phone": "+91 87654 32145",
              "address": "Jalandhar, Punjab",
              "customerType": "Returning",
              "serviceRequests": [
                {
                  "serviceId": 1,
                  "serviceType": "Gardener",
                  "status": "Completed",
                  "rating": 5,
                  "review": "Beautiful garden, thanks!",
                  "requestDate": "January 3, 2024 9:30 AM",
                  "TechnicianAssignedDate": "January 3, 2024 10:00 AM",
                  "completionDate": "January 3, 2024 11:30 AM",
                  "source": "Mobile App",
                  "amountGiven": 2000.00,
                  "technicianAssigned": "GardenerTech1"
                }
              ]
            },
            {
              "customerId": 61,
              "name": "Rahul Kapoor",
              "phone": "+91 98765 43246",
              "address": "Ludhiana, Punjab",
              "customerType": "New",
              "serviceRequests": [
                {
                  "serviceId": 1,
                  "serviceType": "Electrician",
                  "status": "Pending",
                  "rating": null,
                  "review": null,
                  "requestDate": "January 4, 2024 11:30 AM",
                  "TechnicianAssignedDate": "January 4, 2024 12:00 PM",
                  "completionDate": null,
                  "source": "Walk-in",
                  "amountGiven": 0.00,
                  "technicianAssigned": "ElectricianTech14"
                }
              ]
            },
            {
              "customerId": 62,
              "name": "Anita Malhotra",
              "phone": "+91 87654 32148",
              "address": "Chandigarh, Punjab",
              "customerType": "Returning",
              "serviceRequests": [
                {
                  "serviceId": 1,
                  "serviceType": "Cook",
                  "status": "Completed",
                  "rating": 4,
                  "review": "Delicious meals, loved it!",
                  "requestDate": "January 5, 2024 9:30 AM",
                  "TechnicianAssignedDate": "January 5, 2024 10:00 AM",
                  "completionDate": "January 5, 2024 11:30 AM",
                  "source": "Web Link",
                  "amountGiven": 1800.00,
                  "technicianAssigned": "cookTech2"
                }
              ]
            },
            {
              "customerId": 63,
              "name": "Amit Malhotra",
              "phone": "+91 98765 43231",
              "address": "Chandigarh, Punjab",
              "customerType": "Returning",
              "serviceRequests": [
                {
                  "serviceId": 1,
                  "serviceType": "Plumber",
                  "status": "Completed",
                  "rating": 5,
                  "review": "Excellent plumbing work!",
                  "requestDate": "January 5, 2024 11:30 AM",
                  "TechnicianAssignedDate": "January 5, 2024 12:00 PM",
                  "completionDate": "January 5, 2024 1:30 PM",
                  "source": "Mobile App",
                  "amountGiven": 1800.00,
                  "technicianAssigned": "plumberTech2"
                }
              ]
            },
            {
              "customerId": 64,
              "name": "Neha Sharma",
              "phone": "+91 98765 43232",
              "address": "Jalandhar, Punjab",
              "customerType": "New",
              "serviceRequests": [
                {
                  "serviceId": 1,
                  "serviceType": "Electrician",
                  "status": "Pending",
                  "rating": null,
                  "review": null,
                  "requestDate": "January 6, 2024 10:30 AM",
                  "TechnicianAssignedDate": "January 6, 2024 11:00 AM",
                  "completionDate": null,
                  "source": "Web Link",
                  "amountGiven": 0.00,
                  "technicianAssigned": "ElectricianTech18"
                }
              ]
            },
            {
              "customerId": 65,
              "name": "Manpreet Kaur",
              "phone": "+91 98765 43233",
              "address": "Ludhiana, Punjab",
              "customerType": "Returning",
              "serviceRequests": [
                {
                  "serviceId": 1,
                  "serviceType": "Gardener",
                  "status": "Completed",
                  "rating": 4,
                  "review": "Good gardening work!",
                  "requestDate": "January 7, 2024 9:30 AM",
                  "TechnicianAssignedDate": "January 7, 2024 10:00 AM",
                  "completionDate": "January 7, 2024 11:30 AM",
                  "source": "Mobile App",
                  "amountGiven": 2000.00,
                  "technicianAssigned": "GardenerTech3"
                }
              ]
            },
            {
              "customerId": 66,
              "name": "Rohit Arora",
              "phone": "+91 98765 43234",
              "address": "Chandigarh, Punjab",
              "customerType": "New",
              "serviceRequests": [
                {
                  "serviceId": 1,
                  "serviceType": "Plumber",
                  "status": "Pending",
                  "rating": null,
                  "review": null,
                  "requestDate": "January 8, 2024 2:30 PM",
                  "TechnicianAssignedDate": null,
                  "completionDate": null,
                  "source": "Web Link",
                  "amountGiven": 0.00,
                  "technicianAssigned": "ElectricianTech19"
                }
              ]
            },
            {
              "customerId": 67,
              "name": "Aman Singh",
              "phone": "+91 98765 43235",
              "address": "Amritsar, Punjab",
              "customerType": "Returning",
              "serviceRequests": [
                {
                  "serviceId": 1,
                  "serviceType": "Plumber",
                  "status": "Completed",
                  "rating": 5,
                  "review": "Excellent plumbing work!",
                  "requestDate": "January 5, 2024 11:30 AM",
                  "TechnicianAssignedDate": "January 5, 2024 12:00 PM",
                  "completionDate": "January 5, 2024 1:30 PM",
                  "source": "Mobile App",
                  "amountGiven": 1800.00,
                  "technicianAssigned": "plumberTech2"
                }
              ]
            },
            {
              "customerId": 68,
              "name": "Harpreet Kaur",
              "phone": "+91 98765 43236",
              "address": "Jalandhar, Punjab",
              "customerType": "New",
              "serviceRequests": [
                {
                  "serviceId": 1,
                  "serviceType": "Electrician",
                  "status": "Pending",
                  "rating": null,
                  "review": null,
                  "requestDate": "January 6, 2024 10:30 AM",
                  "TechnicianAssignedDate": null,
                  "completionDate": null,
                  "source": "Web Link",
                  "amountGiven": 0.00,
                  "technicianAssigned": "ElectricianTech20"
                }
              ]
            },
            {
              "customerId": 69,
              "name": "Vishal Kapoor",
              "phone": "+91 98765 43237",
              "address": "Ludhiana, Punjab",
              "customerType": "Returning",
              "serviceRequests": [
                {
                  "serviceId": 1,
                  "serviceType": "Gardener",
                  "status": "Completed",
                  "rating": 4,
                  "review": "Good gardening work!",
                  "requestDate": "January 7, 2024 9:30 AM",
                  "TechnicianAssignedDate": "January 7, 2024 10:00 AM",
                  "completionDate": "January 7, 2024 11:30 AM",
                  "source": "Mobile App",
                  "amountGiven": 2000.00,
                  "technicianAssigned": "GardenerTech2"
                }
              ]
            },
            {
              "customerId": 70,
              "name": "Sneha Arora",
              "phone": "+91 98765 43238",
              "address": "Chandigarh, Punjab",
              "customerType": "New",
              "serviceRequests": [
                {
                  "serviceId": 1,
                  "serviceType": "Cook",
                  "status": "Pending",
                  "rating": null,
                  "review": null,
                  "requestDate": "January 8, 2024 2:30 PM",
                  "TechnicianAssignedDate": null,
                  "completionDate": null,
                  "source": "Web Link",
                  "amountGiven": 0.00,
                  "technicianAssigned": "ElectricianTech21"
                }
              ]
            },
            {
              "customerId": 71,
              "name": "Rahul Malhotra",
              "phone": "+91 98765 43239",
              "address": "Amritsar, Punjab",
              "customerType": "Returning",
              "serviceRequests": [
                {
                  "serviceId": 1,
                  "serviceType": "Plumber",
                  "status": "Completed",
                  "rating": 5,
                  "review": "Excellent plumbing work!",
                  "requestDate": "January 5, 2024 11:30 AM",
                  "TechnicianAssignedDate": "January 5, 2024 12:00 PM",
                  "completionDate": "January 5, 2024 1:30 PM",
                  "source": "Mobile App",
                  "amountGiven": 1800.00,
                  "technicianAssigned": "plumberTech2"
                }
              ]
            },
            {
              "customerId": 72,
              "name": "Gardener",
              "phone": "+91 98765 43240",
              "address": "Jalandhar, Punjab",
              "customerType": "New",
              "serviceRequests": [
                {
                  "serviceId": 1,
                  "serviceType": "Electrician",
                  "status": "Pending",
                  "rating": null,
                  "review": null,
                  "requestDate": "January 7, 2024 10:30 AM",
                  "TechnicianAssignedDate": null,
                  "completionDate": null,
                  "source": "Web Link",
                  "amountGiven": 0.00,
                  "technicianAssigned": "ElectricianTech22"
                }
              ]
            },
            {
              "customerId": 73,
              "name": "Rajat Kapoor",
              "phone": "+91 98765 43241",
              "address": "Ludhiana, Punjab",
              "customerType": "Returning",
              "serviceRequests": [
                {
                  "serviceId": 1,
                  "serviceType": "Gardener",
                  "status": "Completed",
                  "rating": 4,
                  "review": "Good gardening work!",
                  "requestDate": "January 7, 2024 9:30 AM",
                  "TechnicianAssignedDate": "January 7, 2024 10:00 AM",
                  "completionDate": "January 7, 2024 11:30 AM",
                  "source": "Mobile App",
                  "amountGiven": 2000.00,
                  "technicianAssigned": "GardenerTech1"
                }
              ]
            },
            {
              "customerId": 74,
              "name": "Meenal Arora",
              "phone": "+91 98765 43242",
              "address": "Chandigarh, Punjab",
              "customerType": "New",
              "serviceRequests": [
                {
                  "serviceId": 1,
                  "serviceType": "Electrician",
                  "status": "Pending",
                  "rating": null,
                  "review": null,
                  "requestDate": "January 8, 2024 2:30 PM",
                  "TechnicianAssignedDate": null,
                  "completionDate": null,
                  "source": "Web Link",
                  "amountGiven": 0.00,
                  "technicianAssigned": "ElectricianTech23"
                }
              ]
            },
            {
              "customerId": 75,
              "name": "Pankaj Gupta",
              "phone": "+91 98765 43243",
              "address": "Amritsar, Punjab",
              "customerType": "Returning",
              "serviceRequests": [
                {
                  "serviceId": 1,
                  "serviceType": "Plumber",
                  "status": "Completed",
                  "rating": 5,
                  "review": "Excellent plumbing work!",
                  "requestDate": "January 5, 2024 11:30 AM",
                  "TechnicianAssignedDate": "January 5, 2024 12:00 PM",
                  "completionDate": "January 5, 2024 1:30 PM",
                  "source": "Mobile App",
                  "amountGiven": 1800.00,
                  "technicianAssigned": "plumberTech2"
                }
              ]
            }
      
 ]

 export default customers;