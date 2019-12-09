/* ref:  https://www.nerdwallet.com/personal-loans?annualIncomeFilter=50000&creditScoreFilter=630&loanAmountFilter=5000&loanUseFilter=CONSOLIDATE_DEBT&stateFilter=IL */


var Lenders = [
    {
        "ID": 1,
        "LenderName": "Discover",
        "Rating": "5.0",
        "AprFrom": "5.5%",
        "AprTo": "17.3%",
        "LoanPeriods": [1, 5, 10, 15],
        "LoanTypes": ["Auto", "Personal", "Education"],
        "MinCreditScore": "630",
        "LogoName" : "discover.png",
        "Qualifications": ["Minimum credit score of 630.", "No minimum income specified.","Maximum debt-to-income ratio varies depending on loan purpose"]
    },
    {
        "ID": 2,
        "LenderName": "Consumer Credit Union",
        "Rating": "4.5",
        "AprFrom": "5.3%",
        "AprTo": "18.2%",
        "LoanPeriods": [1, 5, 10, 15, 20, 25, 30],
        "LoanTypes": ["Auto", "Personal", "Mortgage"],
        "MinCreditScore": "630",
        "LogoName": "consumercreditunion.png",
        "Qualifications": ["Minimum credit score of 630.", "Maximum debt-to-income ratio varies depending on loan purpose"]
    },
    {
        "ID": 3,
        "LenderName": "AMEX",
        "Rating": "4.8",
        "AprFrom": "5.6%",
        "AprTo": "17.8%",
        "LoanPeriods": [3, 5, 10, 15],
        "LoanTypes": ["Auto", "Education"],
        "MinCreditScore": "690",
        "LogoName": "amex.jpg",
        "Qualifications": ["Minimum credit score: 690, but average is 710.", "Minimum credit history: Two years, but average is 18 years"]
    },
    {
        "ID": 4,
        "LenderName": "BOB",
        "Rating": "4.2",
        "AprFrom": "5.4%",
        "AprTo": "17.4%",
        "LoanPeriods": [10, 15],
        "LoanTypes": ["Education"],
        "MinCreditScore": "630",
        "LogoName": "bob.jpg",
        "Qualifications": ["Minimum credit score: 630, but average is 670.", "Minimum credit history: Two years, but average is 18 years", "Minimum annual income: $24, 000, but average is $87, 000"]
    },
    {
        "ID": 5,
        "LenderName": "HDFC",
        "Rating": "4.9",
        "AprFrom": "5.1%",
        "AprTo": "16.4%",
        "LoanPeriods": [3, 5, 10, 15],
        "LoanTypes": ["Education", "Mortgage"],
        "MinCreditScore": "690",
        "LogoName": "hdfc.png",
        "Qualifications": ["At least 18 years old", "Valid U.S. bank account, Social Security number or tax ID"]
    },
    {
        "ID": 6,
        "LenderName": "BOA",
        "Rating": "4.7",
        "AprFrom": "6.0%",
        "AprTo": "18.3%",
        "LoanPeriods": [5, 10, 15],
        "LoanTypes": ["Personal", "Education"],
        "MinCreditScore": "720",
        "LogoName": "boa.png",
        "Qualifications": ["At least $80,000 in gross annual income"]
    },
    {
        "ID": 7,
        "LenderName": "IDFC",
        "Rating": "4.8",
        "AprFrom": "11.0%",
        "AprTo": "28.3%",
        "LoanPeriods": [5, 10, 15, 20],
        "LoanTypes": ["Personal"],
        "MinCreditScore": "300",
        "LogoName": "idfc.jpg",
        "Qualifications": ["At least $50,000 in gross annual income", "Minimum monthly free cash flow: $800"]
    },
    {
        "ID": 8,
        "LenderName": "PNC",
        "Rating": "4.5",
        "AprFrom": "7.0%",
        "AprTo": "28.3%",
        "LoanPeriods": [5, 10, 15, 20],
        "LoanTypes": ["Personal", "Education"],
        "MinCreditScore": "720",
        "LogoName": "pnc.png",
        "Qualifications": ["At least $70,000 in gross annual income", "Valid U.S. bank account, Social Security number or tax ID"]
    },
    {
        "ID": 9,
        "LenderName": "CHASE",
        "Rating": "5.0",
        "AprFrom": "5.5%",
        "AprTo": "12.3%",
        "LoanPeriods": [5, 10, 15],
        "LoanTypes": ["Auto", "Education"],
        "MinCreditScore": "720",
        "LogoName": "chase.png",
        "Qualifications": ["Minimum credit score: 720", "Minimum annual income: Not specified, but average is $80,000"]
    },
    {
        "ID": 10,
        "LenderName": "CITI",
        "Rating": "4.6",
        "AprFrom": "4.2%",
        "AprTo": "22.3%",
        "LoanPeriods": [5, 10, 15],
        "LoanTypes": ["Auto", "Education", "Personal"],
        "MinCreditScore": "300",
        "LogoName": "citi.jpg",
        "Qualifications": ["Minimum credit score: 300", "Minimum annual income: None, average is $49,000"]
    },
    {
        "ID": 11,
        "LenderName": "UPSTART",
        "Rating": "4.5",
        "AprFrom": "5.7%",
        "AprTo": "36%",
        "LoanPeriods": [5, 10, 15, 20, 25, 30],
        "LoanTypes": ["Auto", "Education", "Personal", "Mortgage"],
        "MinCreditScore": "630",
        "LogoName": "upstart.png",
        "Qualifications": ["Minimum credit score: 630", "Minimum annual income: $12,000", "Minimum credit history: None"]
    },
    {
        "ID": 12,
        "LenderName": "LENDINGCLUB",
        "Rating": "4.0",
        "AprFrom": "7.0%",
        "AprTo": "35.9%",
        "LoanPeriods": [5, 10, 15, 20, 25, 30],
        "LoanTypes": ["Auto", "Personal", "Mortgage"],
        "MinCreditScore": "720",
        "LogoName": "lendingclub.png",
        "Qualifications": ["Minimum credit score: 720", "Minimum credit history of 3 years"]
    }
]