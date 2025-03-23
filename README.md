# @trackpilots/week-picker

![npm](https://img.shields.io/npm/v/@trackpilots/week-picker?style=flat-square)
![license](https://img.shields.io/npm/l/@trackpilots/week-picker?style=flat-square)
![downloads](https://img.shields.io/npm/dt/@trackpilots/week-picker?style=flat-square)

A **customizable week picker** component built with **React** and **Tailwind CSS**.

## ✨ Screenshots  

![Screenshot](assets/image.png)
---

## 🚀 Installation  
You can install the package using **npm** or **yarn**:  

### **Using npm**  
```sh
npm install @trackpilots/week-picker
# or
yarn add @trackpilots/week-picker
```

Make sure Tailwind CSS is installed in your project.

##  📌 Usage
Use in Your Component
```sh
import React, { useState } from "react";
import WeekPicker from "@trackpilots/week-picker";

const App = () => {
  const [selectedWeek, setSelectedWeek] = useState(null);

  const handleSelect = (week) => {
    setSelectedWeek(week);
    console.log("Selected Week:", week);
  };


  return (
    <div className="p-4">
      <h2 className="text-lg font-bold">Date Picker</h2>
      <WeekPicker
        selectedDate={new Date("2024-06-01")} 
        onSelect={handleSelect}
        selectedColor="#FF5733"
      />
      <p>Selected Week: {selectedWeek ? selectedWeek.week : "None"}</p>
    </div>
  );
};

export default App;
```

## 📌 DateFilter Component
A React Select component that allows users to choose a Week

## ⚙️ Props  

| Prop Name      | Type              | Default          | Description                          |
|---------------|------------------|----------------|----------------------------------|
| `selectedDate` | `Date` or `null`  | `null`         | The date of the Week picker. |
| `onSelect`    | `function`        | `() => {}`     | Triggered when a Week is selected. |
| `selectedColor` | `string`        | `"#9D55FF"`    | Highlight color for the selected Week. |
| `icon`        | `React.ElementType` | `IoCalendarOutline` | Custom calendar icon component. |
---

## **✨ Example**  
```sh
<WeekPicker 
  selectedDate={new Date("2024-06-01")} 
  onSelect={(Week) => console.log("User selected:", week)} 
  selectedColor="#007BFF"
/>
```

## 📦 Dependencies  

- [React](https://react.dev/)  
- [Tailwind CSS](https://tailwindcss.com/)  
- [react-icons](https://react-icons.github.io/react-icons/) (for `IoCalendarOutline` icon)  


## 📌 Maintainers
These packages are maintained by [**Quick App Studio**](https://quickappstudio.com/our-team) Developers.

##  📄 License
This project is licensed under the MIT License.