# ZRA-calcute-PAYE
# PAYE Calculator 

A simple web-based PAYE Calculator inspired by the Zambia Revenue Authority (ZRA) tax calculator.

This project calculates:

- Gross Pay
- NAPSA (5%)
- NHIMA Contribution
- PAYE Tax (Based on 2026 Tax Bands)
- Total Deductions
- Net Salary

Built using:

- HTML
- CSS
- JavaScript

---

## Project Preview

The layout is inspired by the official ZRA calculator design.

---

## Features

✔ Clean ZRA-style layout  
✔ Responsive design  
✔ Manual calculation (only calculates when you click **Calculate**)  
✔ Clear button to reset all fields  
✔ Tax band breakdown table  
✔ Real-time deduction summary after button click  

---

## How It Works

1. Enter Basic Pay
2. Enter Allowances
3. Click **Calculate**
4. The system will:
   - Compute Gross Pay
   - Deduct NAPSA (5%)
   - Deduct NHIMA
   - Apply PAYE Tax bands
   - Show Total Deductions
   - Display Net Salary

No automatic calculation happens during typing — results only show when the button is clicked.

---

## Project Structure

```
ZRA-calcute-PAYE/
├── README.md              # Project documentation
├── index.html             # Main HTML file with calculator interface
├── script.js              # JavaScript logic for calculations
└── stylesZRA.css          # CSS styling and responsive design
```

### File Descriptions

- **index.html**: Contains the HTML structure for the PAYE calculator form, input fields, calculation button, and results display area.

- **script.js**: Implements the calculation logic for:
  - Gross Pay calculation (Basic Pay + Allowances)
  - NAPSA deduction (5% of Gross Pay)
  - NHIMA contribution calculation
  - PAYE tax calculation based on 2026 tax bands
  - Total deductions and net salary computation

- **stylesZRA.css**: Provides the visual styling including:
  - ZRA-inspired design and color scheme
  - Responsive layout for mobile and desktop
  - Form styling and button design
  - Results table formatting

---

## Getting Started

1. Clone or download this repository
2. Open `index.html` in your web browser
3. Enter your Basic Pay and Allowances
4. Click the **Calculate** button to see your salary breakdown
5. Use the **Clear** button to reset all fields

---

## Tax Bands (2026)

The calculator applies PAYE tax based on the current 2026 tax bands for Zambia. The system automatically calculates the appropriate tax based on your gross pay.

---

## Notes

- NAPSA contribution is fixed at 5% of gross pay
- NHIMA contribution is calculated separately based on current rates
- All calculations are performed client-side in your browser
- No data is stored or transmitted to any server

---

## License

This project is open source and available for educational and personal use.