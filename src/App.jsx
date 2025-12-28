import React from 'react'
import Card from './components/card'

const App = (props) => {

  const jobOpenings = [
  {
    brandLogo: "https://media.wired.com/photos/5926ffe47034dc5f91bed4e8/3:2/w_2560%2Cc_limit/google-logo.jpg",
    nameofCompany: "Google",
    datePosted: "5 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUUW5Ek6IWyeN53c7nVYESmhlLWOhbZK201Q&s",
    nameofCompany: "Meta",
    datePosted: "10 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$50/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://1000logos.net/wp-content/uploads/2016/10/Amazon-logo-meaning.jpg",
    nameofCompany: "Amazon",
    datePosted: "7 days ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$42/hr",
    location: "Pune, India"
  },
  {
    brandLogo: "https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png",
    nameofCompany: "Apple",
    datePosted: "12 days ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$65/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456",
    nameofCompany: "Netflix",
    datePosted: "3 days ago",
    post: "Platform Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$70/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://www.shutterstock.com/image-vector/color-square-icon-tone-red-260nw-2176011705.jpg",
    nameofCompany: "Microsoft",
    datePosted: "8 days ago",
    post: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$55/hr",
    location: "Hydrabad, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbdQi0yohiPRpm5Twf9hluWmgMe8smBh6Mcg&s",
    nameofCompany: "IBM",
    datePosted: "15 days ago",
    post: "Java Developer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$30/hr",
    location: "Noida, India"
  },
  {
    brandLogo: "https://fabrikbrands.com/wp-content/uploads/Oracle-Logo-History-4-864x540.png",
    nameofCompany: "Oracle",
    datePosted: "6 days ago",
    post: "Database Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$48/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://blog.adobe.com/en/publish/2020/05/28/media_1cc0fcc19cf0e64decbceb3a606707a3ad23f51dd.png?width=1200&format=pjpg&optimize=medium",
    nameofCompany: "Adobe",
    datePosted: "9 days ago",
    post: "UI Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$40/hr",
    location: "Bengaluru, India"
  },
  {
    brandLogo: "https://www.logoai.com/uploads/articles/2024/03/05/17096195246566834.jpg",
    nameofCompany: "Tesla",
    datePosted: "4 days ago",
    post: "Software Engineer – Automation",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$68/hr",
    location: "Pune, India"
  }
];

  console.log(jobOpenings)

  return (
    <div className="parent">
      {jobOpenings.map(function(ele,idx){

        return <div key={idx}>
              <Card key={idx} company={ele.nameofCompany} post={ele.post} 
                brandLogo={ele.brandLogo} datePosted={ele.datePosted}
                tag1={ele.tag1} tag2={ele.tag2} pay={ele.pay}  location={ele.location}
                />
        </div>

      })}
    </div>
  )
}

export default App
