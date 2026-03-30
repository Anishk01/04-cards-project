import Card from './components/Card'
import Navbar from "./components/Navbar";

const App = () => {

  const jobOpenings = [
    {
      brandLogo: "https://play-lh.googleusercontent.com/Eh-N9HKWJgQ4Oa5wmhaE5RbHkB3m3Ud9tsW6saUHis05BL7Xnpubi5iamR5lDKd-Ew",
      companyName: "Google",
      datePosted: "5 days ago",
      post: "Frontend Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$30/hr",
      location: "Bangalore, India"
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7RD-D6qOKEzNbsWfnBUjSfQv4GYF3jBJloA&s",
      companyName: "Amazon",
      datePosted: "1 week ago",
      post: "Backend Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$45/hr",
      location: "Hyderabad, India"
    },
    {
      brandLogo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABHVBMVEX///8AgfkAZOAAgPv//v////0GaeH9//8Bf/gEZuH///sBffcAgfgAffUBefMAe/QAdfAEcej4//8GbeYAY+IAgP0HZt4GbucAcu4Ddu3x//8Agvb///cCauX5//4AfPkAd/YAXNwAVtJ7teYAXNIAdN3c7vnm+f3a8/oAeugAVMkAcuYAYebN7PoAWMgAeey51utuodwAbe4AY9IAY89enuCXtd1lkMg3dMw7fc7I4vSayO5hpOA0j90DfuIAVNQtheCErN0yit2q0vEAWMJgp+aGwe5gkdONsdiw2O6cyu1YmeK84fSh0fAAT9RFfsakwuMVZsMGX8A2c8hMltc1juquyupQnulZodl1s9+Iue54rOhAiMyJv+EZdNbshpuPAAAWoUlEQVR4nO1ca0PaytZOSCaTDOFqwiWBBAUEixQvtbtipYqtrbfTut996and/v+f8a41CRhUAq2x+3yYp9XalsA8WWvWfSJJAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAs8JwvGzV1MKF6sq/pTgmv638ITb84ugIp5wuUQo/d8WIPL7aYZcRVUKSHJJiSLQsJ9eH2EMBAibkf78XUocASe89fBT0emsr693O04R5SHxLUWmL4p7ByKBjZGo43S63eB6hsrO79W/K1DKGKgWBXrO8PVvb3bXXgBar/a3Xw8didSISmClKoujCFerKDWvf/D2cLSx0d7YGB1+Peg7+F+UqPTfFidh8Mvb2n71bnXVmmJz9cWrj1sOIR5ZQFCiHtwkqXt61MvZvq3YtqLY6Uyud9QcUnxv+q9aV8LX73y5frdppUpGKoXs4FuqVLI2N9/9ftyhQCBez1QQdf9rL2srsi67rmnbumyarqv4vfEJKELR+zfVFEyDVHz96p1VKqUMA3iVUgECQW6uvj/uoA7Gammt09zwbVs2QYSyLOuKIisA2ZXt/NGJx57ifZ4MwujW9erq5lQ7kSTA4DRLhmWtvv9SjDGM6P+uRmkFmJmurMimzH+CH234uykrucN+vKF6TmB41tleA/1MBSp6H8jUslr7Q0kFNzCra2A4wSWAoep8qIJaBsSAnx6QRBmaJvy2/fapo7J/w0WC+WOk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",
      companyName: "Meta",
      datePosted: "10 days ago",
      post: "React Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$35/hr",
      location: "Gurgaon, India"
    },
    {
      brandLogo: "https://yt3.googleusercontent.com/3b73AYEMMfa3SX5KJMeygio9smTPvrPrpicuQZbfQ_2DN7dV_ApiRM4CdYjSprEy1YYvt_9b=s900-c-k-c0x00ffffff-no-rj",
      companyName: "Netflix",
      datePosted: "2 weeks ago",
      post: "UI Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$50/hr",
      location: "Remote"
    },
    {
      brandLogo: "https://i.pinimg.com/736x/60/6b/c0/606bc0717982547e555a514b479365a0.jpg",
      companyName: "Apple",
      datePosted: "3 days ago",
      post: "iOS Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$48/hr",
      location: "Bangalore, India"
    },
    {
      brandLogo: "https://png.pngtree.com/png-clipart/20190613/original/pngtree-microsoft-logo-icon-png-image_3588810.jpg",
      companyName: "Microsoft",
      datePosted: "4 days ago",
      post: "Full Stack Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$32/hr",
      location: "Noida, India"
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOj-Y_xDPVw7H0AOLBRhX6y3RJkPFdQOnWPw&s",
      companyName: "Flipkart",
      datePosted: "6 days ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$28/hr",
      location: "Bangalore, India"
    },
    {
      brandLogo: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEhEPEBAPDw8PEA8PEA8ODw8ODhAQFRIWFhYSFRYYHiggGBslHRMWIjEhJSkrLi8uFx8zOz8sQygtLisBCgoKDg0OGhAQGy8lICU2LzcvLSs1LS0rLy0tLS0tLy8rLS0tLS0tLS8tLTUvLS0tLS0tLS0tLy0tLS0tLS0tLf/AABEIAOEA4QMBEQACEQEDEQH/xAAbAAEAAQUBAAAAAAAAAAAAAAAABAECAwYHBf/EADoQAAICAQEECAQEBAYDAAAAAAABAgMRBAUSITEGEyJBUWFxgTKRobEHI1KCFEJiwTNyksLR8SRDsv/EABsBAQACAwEBAAAAAAAAAAAAAAAFBgEDBAIH/8QAMBEBAAIBAgQEBQQDAAMAAAAAAAECAwQRBRIxQRMhUYEyYXGx8AZCocEikdEUI/H/2gAMAwEAAhEDEQA/AO4gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALXIC3fAKYF6YFQAAC1yAt3wKqYFyYFQAAAAAAAAAAAAAAAAAAAtkwI9tmAI2o1MK4uy2yFUFzlZKMIr1b4Cdo6s1ibTtEbrqb4yipwlGyEuKnCSlFrya4MExMTtKTXYGGaLAuAslICNZYBHu1VcHGFltcJ2PEITnGMpvwim8v2MTMR1ZitpjeIZt9rmZYSITAypgVAAAAAAAAAAAAAAAAAKNgYLZgebtHX16eqeoulu11rPm33JLvbfBLzMWtFY3l6x0tktFauU6q+7a10rbpuuqH+FVHtKEXnGO7PDjLv9MYjNdlyYqVvaPi6LPg0UYKR8+7NsrV6jZNnWRbu0c5JXVrhz4b2OUZ+D5Pk+7GvSa2LTt/DVqtJXLX59pdV0uphZCF1UlOqyKlCS5NMl4mJjeFctWazMW6p1czLDI5AR7rANf6VdII6Cnfwp6i3MaKvGXfJ4/lWVn1S7zVlyxjru6dLppz32jo5FrK7b5yt1FjnbPjJvDfp4YXguCNml0UanH4s26rfg4dFabdG69B+lkoSjotZLejLEdPfJ5afJVzb557m+XLvWMWpfBbkv7SguJ8NnFPPWPz87OiRbi8HpCJUJAZQAAAAAAAAAAAAAAAADFOQEWXaePmByrp1tv8AjL+pg/8AxdNJrhytuXCUvNLjFe77z3p8Hj33n4Y/mVo4Pw/y8S8dWDo6+Ni8o/Rv/k5P1LX/AAxz9UxrI8qvbnBSTi0mmmmnxTT7ipRMx5w4F3Q7XPR3/wADY29LqZN6aUn/AIdz51N/1d3njxZYdBq4vHLKJ4jpt48SvWOrf65YeCUQjNKwCHqNRCuM7rJKNdUZTlJ8kkstiZiI3lmtZtMVjrLke0NfPV3T1dmVvdmmt/8AqpXwx9XnL82yu63UzkttHRc9BpIwY49UK7m/YtnBZ30dPf7penwsF1aknF95IZ8Nc1OWWMmOMleWXS+gXSB6qp6e6WdVpkst87auUbPN8k/Z95B1i1ZmlusKLxHSTp8k+XlLbqZnpHpUWBcAAAAAAAAAAAAAABbJgRb5gax062y9Jp+rreNRqc11tc4Rx27PZNJeckY2m0xSvWXdw7SzqM0R2hy6qtRSiuS4E5ix1x0iley+0pFK8sPU2DPFjX6oP5pp/wDJCfqKm+li3pMfy59ZH+ES2IpKORtfpFdBwba5OMlwlCa5ST8UzbiyTjtFoYmImNpbd0Z2rLVUZswtTQ+p1EV+tL415SWJL1a7i14MsZaRaFW1eDwckx27PTVmcJd5uc7S/wARNp70oaCD7Ed23U47++up/wD2/SPiRvENRyV5I6pzg2k57Tlt0jo1QgVoR71x9i5fp+++mmvpM/y3Y+jGTrYv0Wunpbq9VX8VT7Uc4Vlb4Sg/VZ+/cRvEMO8eLXrH2RvEtJGfFLtGk1ULYV31vertjGcX5NZWfB+XkcMTvG6iWrNLTWeqfVIywzICoAAAAAAAAAAAAAMVkgInN+SA490j2r/Gamy9PNS/Ko8Oqi32v3PMvRrwO7Q4uuWe/T6LtwjR+BhiZ6y88kUwk7Ns3ba3/Vu/Ph/cj+K4vE0mSPlv/rzadRG+OW1HzpEhkX7L1X8NqYXcq7d2jULu3W/y7X/lk8Z/TOXgSfDdRyX5J6S4Nfg8TFvHWPNuGuujpYXaifw1xclFc2+6K83JpL1LBe8UrNp7K/ix2y3ilesuTWWSnKdljzZbOVljXJylzx5LkvJIq2bLOS82le8GGuHHFK9lDU3MOoXJll/TmTa18f0ltx+jCWptUYmN4YmN26fhjtTHW7Pm+Czfp8/pb7cF6NqXvIr9sc4ck4+3WFN4zpPDvzx+ejoNEu4yhEuDAuAAAAAAAAAAAACkmBFvkBrHTzaT0+kcIvFuqfUxa5xi1myXtHK9ZIzWk3tFI7u/hmm8fURHaOrl8VjguSJ2sRWNoX6I2jaFTLKVsvTO2+mpc7La4+i3ll+yy/Y15dvDtv02c+qy+Fhvee0S2u2DjKUXzjKUX6p4PmOSs1tNZ7IjHbnrFo7rTw9rZwUk4tJpppp8mnzTMxO3mwt6R7YlZRRpm25Q7VzfObj2a2/HK7T88ErqNb4uGtY9/b83aOH6Dw818s9O3v8AmzXCPTQBmp0UrYXSXKip3P0jKKa+Tb9iZ4FvGqie233ar6iMV6Vn907PNRdneAVo1ctPZVqa/jomppfqjylH3Ta9yP4hi5qRkjrX7ODiGnjNimHbNPqI2RhbW96u2EZwku+Mkmn8mcETvG8KDNZrPLPZOqYYZgAAAAAAAAAAAAxzYESXF49wOW9PdoddrJRTzDTR6mPhvvErH892P7Dv0OPznJP0XDgOn5MM5J62a+SCeANn/DvRdZqnY1w09cpek59iP0c/kcusttj29UHx/NyaaKR+6f4j8h73SKjcvk+6xKa+z+qfzKJxLHyZ5n183Bw7Jz4Yj0eaR7vUbwBrt9m/Jy8X9O42xCQpXlrEMZl6AN56B7OUqL5zXC9un1rUWn9ZtexO8Jpy1nJ8/srPGtRMZ6Vr+3z93Pb6JVznXL4q5yrl6xbT+xcYneIlbceSMlIvHeIn/awy9jRiYiY2liY38nQvw11/Waaemk8z0k8R8epnmUPrvr2RAcnh2tjnt9uyi8W0/g5/lLdKJGUYlICoAAAAAAAAAAYGC1gQNVqo0123y+GqE7H5qMW8e5nbfo9Y8c5LxSOsuKOUpNyk8zm5Tm/GcnvSfu2ybxU5KRV9IxY4x0ikdg9tgB0noLo+p0crnwnqJOa8dxdmH95fuIvV33vt6KVxzUeJqeSOlfL37p/SWnfqhaucHh+ksL7pfMr/ABbFzY4vHb7S08Ly8uSaev3hrKK8n0Xadm7W/GXZ+fP6ZPVerZirvZ4ZsdwAw+SWW+CS5t+AYmYiN5dX0FH8NTRTwzFJT8G3xm/9TbLXgxxixxT0ULU5vGzWv6tB/EHQ9VqnYl2dRFWL/PHszX0i/wBxNaS/Nj29Fu4Fn8TTcnevl7T5x/bWjqTQB7/QPWdVrYL+XUQnRLw3sb8H84NfuI7XY/8AKMkfSf6QPHtPz4PEjs6nVwbXmcKnpkGBeAAAAAAAAAAUYEbUMDV+nuo6vRSinh3Tqr9s77Xyg17nTpac2SPkleC4fE1cTPSN5/PeXMCWXkAkbN0UtRbXRHnbNRyv5VzlL2Sb9jze0UrNpaNTnjBitknt9/8A67FOmMYwqgsQriopLkklhL5EHM7zvL5za03tNp6yqqVOE6pcpJr0z3/M15aRkpNJ7s47zjvF47NIsrcW4y4Si3F+qeCn3pNLTWesLbS8XrFo6S8nbM+MY+Tb+y+zM1dmnjrLzT06QD3ehmz+u1MZNZhR+bLw3l8C+fH9rO3h+HxM0T2j8hF8X1PhafaOtvL/AK6Bet5vwXAsanvE6cbP6/SOaWbNM+s83BLE18u1+06tJk5b7eqW4LqfB1MVmfK3l79nMSVXgAyaS/q7K7eXVWV2f6JqX9jXlpz0mrRqcXi4rU9Yl26XxepCy+bpVbMMsoAAAAAAAAABSQETUgaX+J8vytPHuds5fKGP9zO7Q/FKw/pyP/befl/bnxIraAb5+HOyd1T1k18SddOf057c/dpL2fiR+sy/sj3VTj+s5pjT17ec/XtH56t1rhni+84FcUkt15+foBr3SjRYkrorhPEZ47pJcH7r7EDxXT8tvFjpPX6pvheo3r4U9ujSNqv8z0jEi69Fi0/wIZ6bxgdN6LbMel06Uli23tz8U2uEfZfXJZdDg8LF59Z6qVxLVf8AkZ5mOkeUf993sQr4HW4FFFZaaypcGnyZmJN5id4ch6R7KekvnVx3PjqfjW+S9uK9iZw5PEpuv/DtXGpwRfv0n6x/3q802u9bNcH6MzBDtujk3XS3zdcG/VxRA3+KXzTLG2S0fOfu9Co8vDMAAAAAAAAAAUYEW+IGp/iJo5WaWNsVnqLFOWOOIOLjJ+zafomdejvFb7T3TXAc8Y9TNZ/dG3v1c1JRdHrdGthT1tu6sxpg07rPBfpX9T+nP105s0Y6790dxHiFNJj3/dPSP7n5OsVVRio1wSjCCUYxXJJLCSIeZmZ3lQ7Wm9ptbrKZXAwwttgBFtpjOMqprMZLH/Xmjxkx1yUmtukvVLzjtFq9Yc36U7MnRYt5ZjJYjNfDLH2eO7yKxn018FuW3TtK5cP1dM9PLr6PFyaUg2zod0dlOUdTdHdqhiVcZLDsl3Sa/Sufn6c5TQaObTGS8eXZA8V4lFazhxT5z1n0b1Fbzz3dxOKykxiBhugB4XSnYa1tOFhX1ZlVJ8Fnvg/J4Xo0vA6NPm8O3ySHDddOky7z8M9Y/tym6qUJShOLhOD3ZRksSi/BktExMbwvdL1vWLVneJZNHpJX2Qph8VslBY7s85eiWX7GL3isTaXjPmrhx2yW6RDtcYJbsVyikl6cl9iDmd3zeZ5pmZS60YGUAAAAAAAAAAMDFZECLKPNNZT4NPimII8p3hr9vQzQSlvdXOOXlwhZOMPZLl7YOmNXliNt0pXjWsrXl5veY83t6XTQriqqYRrhHlGKwvP38zRa02neUdkyXy2m953lKqrPLwkRQFJRAj21gYLqozi4WQjOD5qUVKL9UzzasWja0bvVL2pbmrO0oNOw9HCW/HT17y4rMXLD8k+CNNdJgrO8Vh0X1+pvHLa87PRw5eSOhypFcMAZkgLJxAjTg1xQHmbV2JpdVh31JzSwpxbhYl4b0ea8mbcea9Phl16XX59N5Y7eXp1j/UrdkbC0ulblTX22sOc3Kc8eCb5L0GTPfJ8Us6rX6jU+WS3l6dIevVDvNTjSYoC4AAAAAAAAAAAUaAslACzqgKqsDIkBcAAtcQMbrAp1QFygBkSAqBRgWygBjdQBVAZIxAvAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH//Z",
      companyName: "Myntra",
      datePosted: "8 days ago",
      post: "Frontend Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$25/hr",
      location: "Bangalore, India"
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST8Vejmqk6CACkWGHIdxdBboQyX_bDTvqXLQ&s",
      companyName: "Adobe",
      datePosted: "3 weeks ago",
      post: "UI/UX Developer",
      tag1: "Part Time",
      tag2: "Senior Level",
      pay: "$40/hr",
      location: "Noida, India"
    },
    {
      brandLogo: "https://play-lh.googleusercontent.com/AQtSF5Sl18yp3mQ2tcbOrBLekb7cyP3kyg5BB1uUuc55zfcnbkCDLHFTBwZfYiu1aDI=s256-rw",
      companyName: "Uber",
      datePosted: "12 days ago",
      post: "Backend Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$42/hr",
      location: "Hyderabad, India"
    }
  ];


  return (
    <div className='parent'>
      <Navbar />
      {jobOpenings.map(function (elem,idx) {
        return <div key={idx}>
          <Card company={elem.companyName} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location} dateposted={elem.datePosted} logo={elem.brandLogo} />
        </div>
      })}

    </div>
  )
}

export default App
