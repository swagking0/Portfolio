import Herologo4allportal from "../asserts/images/heroorg-images/4allportallog.svg";
import HerologoNCR from "../asserts/images/heroorg-images/NCRlog.jpeg";
import HerologoBHEL from "../asserts/images/heroorg-images/BHELlog.png";
import HerologoECIL from "../asserts/images/heroorg-images/ECILlog.png";

import HerologoBielefeld from "../asserts/images/heroorg-images/Bielefeldlog.png";
import HerologoSRM from "../asserts/images/heroorg-images/SRMlog.png";

const OrganisationCardData = [
  {
    workherodata: [
      {
        id: 1,
        organisationlogo: Herologo4allportal,
        herorole: "software developer",
        organisationlink: "https://4allportal.net/en/",
      },
      {
        id: 2,
        organisationlogo: HerologoNCR,
        herorole: "project trainee",
        organisationlink: "https://www.ncr.com/",
      },
      {
        id: 3,
        organisationlogo: HerologoBHEL,
        herorole: "project trainee",
        organisationlink: "https://www.bhel.com",
      },
      {
        id: 4,
        organisationlogo: HerologoECIL,
        herorole: "project trainee",
        organisationlink: "http://www.ecil.co.in",
      },
    ],
    schoolherodata: [
      {
        id: 1,
        institutionlogo: HerologoBielefeld,
        institutiondegree: "master of science",
        institutionlink: "https://www.uni-bielefeld.de/",
      },
      {
        id: 2,
        institutionlogo: HerologoSRM,
        institutiondegree: "bachelor of technology",
        institutionlink: "https://www.srmist.edu.in/",
      },
    ],
    projectherodata: [
      {
        id: 1,
        projecttitle: "",
        projectimg: "",
        projectdescription: "",
        projectresource: "",
        category: "",
        visiteduserlike: 0,
      },
    ],
  },
];

export default OrganisationCardData;
