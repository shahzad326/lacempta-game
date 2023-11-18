import Login from "./component/login/Login";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginTesting from "./component/loginTesting/LoginTesting";
import Screen1 from "./component/screens/screen1/Screen1";
import Screen2 from "./component/screens/screen2/Screen2";
import Screen3 from "./component/screens/screen3/Screen3";
import Screen4 from "./component/screens/screen4/Screen4";
import Screen5 from "./component/screens/screen5/Screen5";
import Screen6 from "./component/screens/screen6/Screen6";
import Screen7 from "./component/screens/screen7/Screen7";
import Screen8 from "./component/screens/screen8/Screen8";
import Screen9 from "./component/screens/screen9/Screen9";
import Table from "./component/pages/table/Table";
import TableNew from "./component/pages/table/TableNew/TableNew";
import Rechercheuneécriture from "./component/pages/Rechercheuneécriture/Rechercheuneécriture";
import RechercheuneécritureCopy from "./component/pages/RechercheuneécritureCopy/RechercheuneécritureCopy";
import TableActionPage1 from "./component/pages/TableAction/TableActionPage1/TableActionPage1";
import TableActionPage2 from "./component/pages/TableAction/TableActionPage2/TableActionPage2";
import TableActionPage3 from "./component/pages/TableAction/TableActionPage3/TableActionPage3";
import TableActionPage4 from "./component/pages/TableAction/TableActionPage4/TableActionPage4";
import TableActionPage5 from "./component/pages/TableAction/TableActionPage5/TableActionPage5";
import TableActionPage6 from "./component/pages/TableAction/TableActionPage6/TableActionPage6";
import TableActionPage7 from "./component/pages/TableAction/TableActionPage7/TableActionPage7";
import TableActionPage8 from "./component/pages/TableAction/TableActionPage8/TableActionPage8";
import TableActionPage9 from "./component/pages/TableAction/TableActionPage9/TableActionPage9";
import HomeContainer from "./component/screens/homeScreen/HomeContainer/HomeContainer";
import Dialogue1 from "./component/screens/homeScreen/displayDialogue/Dialogue1/Dialogue1";
import Dialogue2 from "./component/screens/homeScreen/displayDialogue/Dialogue2/Dialogue2";
import Dialogue3 from "./component/screens/homeScreen/displayDialogue/Dialogue3/Dialogue3";
import Dialogue4 from "./component/screens/homeScreen/displayDialogue/Dialogue4/Dialogue4";
import FileUpload from "./component/screens/homeScreen/FileUpload/FileUpload";
import TableActionPage10 from "./component/pages/TableAction/TableActionPage10/TableActionPage10";
import Javuavary from "./component/calender/januavary/Javuavary";
import Februvary from "./component/calender/februvary/februvary";
import March from "./component/calender/march/March";
import April from "./component/calender/april/April";
import May from "./component/calender/may/May";
import June from "./component/calender/june/June";
import July from "./component/calender/july/July";
import August from "./component/calender/august/August";
import September from "./component/calender/september/September";
import October from "./component/calender/october/October";
import November from "./component/calender/november/November";
import December from "./component/calender/december/December";
import DocumentFile1 from "./component/calender/januavary/docunentUpload/DocumentFile1/DocumentFile1";
import DocumentFile2 from "./component/calender/januavary/docunentUpload/DocumentFile2/DocumentFile2";
import DocumentFile3 from "./component/calender/januavary/docunentUpload/DocumentFile3/DocumentFile3";
import DocumentFile4 from "./component/calender/januavary/docunentUpload/DocumentFile4/DocumentFile4";
import FebruvaryDocumentFile1 from "./component/calender/februvary/FebruvarydocunentUpload/FebruvaryDocumentFile1/FebruvaryDocumentFile1";
import FebruvaryDocumentFile2 from "./component/calender/februvary/FebruvarydocunentUpload/FebruvaryDocumentFile2/FebruvaryDocumentFile2";
import FebruvaryDocumentFile3 from "./component/calender/februvary/FebruvarydocunentUpload/FebruvaryDocumentFile3/FebruvaryDocumentFile3";
import FebruvaryDocumentFile4 from "./component/calender/februvary/FebruvarydocunentUpload/FebruvaryDocumentFile4/FebruvaryDocumentFile4";
import MarchDocumentFile1 from "./component/calender/march/MarchdocunentUpload/MarchDocumentFile1/MarchDocumentFile1";
import MarchDocumentFile2 from "./component/calender/march/MarchdocunentUpload/MarchDocumentFile2/MarchDocumentFile2";
import MarchDocumentFile3 from "./component/calender/march/MarchdocunentUpload/MarchDocumentFile3/MarchDocumentFile3";
import MarchDocumentFile4 from "./component/calender/march/MarchdocunentUpload/MarchDocumentFile4/MarchDocumentFile4";
import AprilDocumentFile2 from "./component/calender/april/AprildocunentUpload/AprilDocumentFile2/AprilDocumentFile2";
import AprilDocumentFile1 from "./component/calender/april/AprildocunentUpload/AprilDocumentFile1/AprilDocumentFile1";
import AprilDocumentFile3 from "./component/calender/april/AprildocunentUpload/AprilDocumentFile3/AprilDocumentFile3";
import AprilDocumentFile4 from "./component/calender/april/AprildocunentUpload/AprilDocumentFile4/AprilDocumentFile4";
import MayDocumentFile1 from "./component/calender/may/MaydocunentUpload/MayDocumentFile1/MayDocumentFile1";
import MayDocumentFile2 from "./component/calender/may/MaydocunentUpload/MayDocumentFile2/MayDocumentFile2";
import MayDocumentFile3 from "./component/calender/may/MaydocunentUpload/MayDocumentFile3/MayDocumentFile3";
import MayDocumentFile4 from "./component/calender/may/MaydocunentUpload/MayDocumentFile4/MayDocumentFile4";
import JuneDocumentFile1 from "./component/calender/june/JunedocunentUpload/JuneDocumentFile1/JuneDocumentFile1";
import JuneDocumentFile2 from "./component/calender/june/JunedocunentUpload/JuneDocumentFile2/JuneDocumentFile2";
import JuneDocumentFile3 from "./component/calender/june/JunedocunentUpload/JuneDocumentFile3/JuneDocumentFile3";
import JuneDocumentFile4 from "./component/calender/june/JunedocunentUpload/JuneDocumentFile4/JuneDocumentFile4";
import JulyDocumentFile1 from "./component/calender/july/JulydocunentUpload/JulyDocumentFile1/JulyDocumentFile1";
import JulyDocumentFile2 from "./component/calender/july/JulydocunentUpload/JulyDocumentFile2/JulyDocumentFile2";
import JulyDocumentFile3 from "./component/calender/july/JulydocunentUpload/JulyDocumentFile3/JulyDocumentFile3";
import JulyDocumentFile4 from "./component/calender/july/JulydocunentUpload/JulyDocumentFile4/JulyDocumentFile4";
import AugustDocumentFile1 from "./component/calender/august/AugustdocunentUpload/AugustDocumentFile1/AugustDocumentFile1";
import AugustDocumentFile2 from "./component/calender/august/AugustdocunentUpload/AugustDocumentFile2/AugustDocumentFile2";
import AugustDocumentFile3 from "./component/calender/august/AugustdocunentUpload/AugustDocumentFile3/AugustDocumentFile3";
import AugustDocumentFile4 from "./component/calender/august/AugustdocunentUpload/AugustDocumentFile4/AugustDocumentFile4";
import SeptemberDocumentFile1 from "./component/calender/september/SeptemberdocunentUpload/SeptemberDocumentFile1/SeptemberDocumentFile1";
import SeptemberDocumentFile2 from "./component/calender/september/SeptemberdocunentUpload/SeptemberDocumentFile2/SeptemberDocumentFile2";
import SeptemberDocumentFile3 from "./component/calender/september/SeptemberdocunentUpload/SeptemberDocumentFile3/SeptemberDocumentFile3";
import SeptemberDocumentFile4 from "./component/calender/september/SeptemberdocunentUpload/SeptemberDocumentFile4/SeptemberDocumentFile4";
import OctoberDocumentFile1 from "./component/calender/october/OctoberdocunentUpload/OctoberDocumentFile1/OctoberDocumentFile1";
import OctoberDocumentFile2 from "./component/calender/october/OctoberdocunentUpload/OctoberDocumentFile2/OctoberDocumentFile2";
import OctoberDocumentFile3 from "./component/calender/october/OctoberdocunentUpload/OctoberDocumentFile3/OctoberDocumentFile3";
import OctoberDocumentFile4 from "./component/calender/october/OctoberdocunentUpload/OctoberDocumentFile4/OctoberDocumentFile4";
import NovemberDocumentFile1 from "./component/calender/november/NovemberdocunentUpload/NovemberDocumentFile1/NovemberDocumentFile1";
import NovemberDocumentFile2 from "./component/calender/november/NovemberdocunentUpload/NovemberDocumentFile2/NovemberDocumentFile2";
import NovemberDocumentFile3 from "./component/calender/november/NovemberdocunentUpload/NovemberDocumentFile3/NovemberDocumentFile3";
import NovemberDocumentFile4 from "./component/calender/november/NovemberdocunentUpload/NovemberDocumentFile4/NovemberDocumentFile4";
import DecemberDocumentFile1 from "./component/calender/december/DecemberdocunentUpload/DecemberDocumentFile1/DecemberDocumentFile1";
import DecemberDocumentFile2 from "./component/calender/december/DecemberdocunentUpload/DecemberDocumentFile2/DecemberDocumentFile2";
import DecemberDocumentFile3 from "./component/calender/december/DecemberdocunentUpload/DecemberDocumentFile3/DecemberDocumentFile3";
import DecemberDocumentFile4 from "./component/calender/december/DecemberdocunentUpload/DecemberDocumentFile4/DecemberDocumentFile4";
import PageDaccueil from "./pages/PageDaccueil";
import Calender from "./components/calendar";
import SecondNavbar from "./component/pages/table/SecondNavbar/SecondNavbar";
import Footer from "./components/InnerComponents/footer/Footer";
import NavbarHome from "./component/Navbar/NavbarHome/NavbarHome";
import TableActionPage11 from "./component/pages/TableAction/TableActionPage11/TableActionPage11";
import TableInertion from "./tabledata/tableinsertion/TableInsertion";
import FirstTable from "./tabledata/tableaction/firstTable/FirstTable";
import SecondTable from "./tabledata/tableaction/secondTable/SecondTable";
import ThirdTable from "./tabledata/tableaction/thirdTable/ThirdTable";
import FourthTable from "./tabledata/tableaction/fourthTable/FourthTable";
import FifthTable from "./tabledata/tableaction/fifthTable/FifthTable";
import SixthTable from "./tabledata/tableaction/sixthTable/SixthTable";
import SevenTable from "./tabledata/tableaction/sevenTable/SevenTable";
import EightTable from "./tabledata/tableaction/eightTable/EightTable";
import TableTesting from "./tabledata/tableTesting/TableTesting";
import DisplayingData1 from "./tabledata/tableaction/displayingData1/DisplayingData1";
import DisplayingData2 from "./tabledata/tableaction/displayingData2/DisplayingData2";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PageDaccueil />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login" element={<LoginTesting />} />
        <Route path="/screen1" element={<Screen1 />} />
        <Route path="/screen2" element={<Screen2 />} />
        <Route path="/screen3" element={<Screen3 />} />
        <Route path="/loading" element={<Screen4 />} />
        <Route path="/screen5" element={<Screen5 />} />
        <Route path="/prise-de-note" element={<Screen6 />} />
        <Route path="/introduction" element={<Screen7 />} />
        <Route path="/screen8" element={<Screen8 />} />
        <Route path="/paramètres" element={<Screen9 />} />

        <Route path="/page1" element={<Table />} />
        <Route path="/page2" element={<Rechercheuneécriture />} />
        <Route path="/page3" element={<RechercheuneécritureCopy />} />

        <Route path="/page4" element={<TableActionPage1 />} />
        <Route path="/page5" element={<TableActionPage2 />} />
        <Route path="/page6" element={<TableActionPage3 />} />

        <Route path="/page7" element={<TableActionPage4 />} />
        <Route path="/page8" element={<TableActionPage5 />} />
        <Route path="/page9" element={<TableActionPage6 />} />

        <Route path="/page10" element={<TableActionPage7 />} />
        <Route path="/page11" element={<TableActionPage8 />} />
        <Route path="/documents-comptables" element={<TableActionPage9 />} />
        <Route path="/page13" element={<TableActionPage10 />} />
        <Route path="/page18" element={<TableActionPage11 />} />

        <Route path="/page17" element={<NavbarHome />} />
        <Route path="/page19" element={<TableNew />} />
        <Route path="/page20" element={<TableInertion />} />
        <Route path="/page21" element={<FirstTable />} />
        <Route path="/page22" element={<SecondTable />} />
        <Route path="/page23" element={<ThirdTable />} />
        <Route path="/page24" element={<FourthTable />} />
        <Route path="/page25" element={<FifthTable />} />
        <Route path="/page26" element={<SixthTable />} />
        <Route path="/page27" element={<SevenTable />} />
        <Route path="/page28" element={<EightTable />} />
        <Route path="/page29" element={<TableTesting />} />

        <Route path="/page30" element={<DisplayingData2 />} />
        <Route path="/page31" element={<DisplayingData1 />} />

        <Route path="/home1" element={<HomeContainer />} />
        <Route path="/home2" element={<FileUpload />} />

        <Route path="/dialogue1" element={<Dialogue1 />} />
        <Route path="/dialogue2" element={<Dialogue2 />} />
        <Route path="/dialogue3" element={<Dialogue3 />} />
        <Route path="/dialogue4" element={<Dialogue4 />} />

        <Route path="/month/jan" element={<Javuavary />} />
        <Route path="/month/feb" element={<Februvary />} />
        <Route path="/month/march" element={<March />} />
        <Route path="/month/april" element={<April />} />
        <Route path="/month/may" element={<May />} />
        <Route path="/month/june" element={<June />} />
        <Route path="/month/july" element={<July />} />
        <Route path="/month/august" element={<August />} />
        <Route path="/month/september" element={<September />} />
        <Route path="/month/october" element={<October />} />
        <Route path="/month/november" element={<November />} />
        <Route path="/month/december" element={<December />} />

        <Route path="/month/jan/filefirst" element={<DocumentFile1 />} />
        <Route path="/month/jan/filesecond" element={<DocumentFile2 />} />
        <Route path="/month/jan/filethird" element={<DocumentFile3 />} />
        <Route path="/month/jan/filefourth" element={<DocumentFile4 />} />

        <Route
          path="/month/feb/filefirst"
          element={<FebruvaryDocumentFile1 />}
        />
        <Route
          path="/month/feb/filesecond"
          element={<FebruvaryDocumentFile2 />}
        />
        <Route
          path="/month/feb/filethird"
          element={<FebruvaryDocumentFile3 />}
        />
        <Route
          path="/month/feb/filefourth"
          element={<FebruvaryDocumentFile4 />}
        />

        <Route path="/month/march/filefirst" element={<MarchDocumentFile1 />} />
        <Route
          path="/month/march/filesecond"
          element={<MarchDocumentFile2 />}
        />
        <Route path="/month/march/filethird" element={<MarchDocumentFile3 />} />
        <Route
          path="/month/march/filefourth"
          element={<MarchDocumentFile4 />}
        />

        <Route path="/month/april/filefirst" element={<AprilDocumentFile1 />} />
        <Route
          path="/month/april/filesecond"
          element={<AprilDocumentFile2 />}
        />
        <Route path="/month/april/filethird" element={<AprilDocumentFile3 />} />
        <Route
          path="/month/april/filefourth"
          element={<AprilDocumentFile4 />}
        />

        <Route path="/month/may/filefirst" element={<MayDocumentFile1 />} />
        <Route path="/month/may/filesecond" element={<MayDocumentFile2 />} />
        <Route path="/month/may/filethird" element={<MayDocumentFile3 />} />
        <Route path="/month/may/filefourth" element={<MayDocumentFile4 />} />

        <Route path="/month/june/filefirst" element={<JuneDocumentFile1 />} />
        <Route path="/month/june/filesecond" element={<JuneDocumentFile2 />} />
        <Route path="/month/june/filethird" element={<JuneDocumentFile3 />} />
        <Route path="/month/june/filefourth" element={<JuneDocumentFile4 />} />

        <Route path="/month/july/filefirst" element={<JulyDocumentFile1 />} />
        <Route path="/month/july/filesecond" element={<JulyDocumentFile2 />} />
        <Route path="/month/july/filethird" element={<JulyDocumentFile3 />} />
        <Route path="/month/july/filefourth" element={<JulyDocumentFile4 />} />

        <Route
          path="/month/august/filefirst"
          element={<AugustDocumentFile1 />}
        />
        <Route
          path="/month/august/filesecond"
          element={<AugustDocumentFile2 />}
        />
        <Route
          path="/month/august/filethird"
          element={<AugustDocumentFile3 />}
        />
        <Route
          path="/month/august/filefourth"
          element={<AugustDocumentFile4 />}
        />

        <Route
          path="/month/september/filefirst"
          element={<SeptemberDocumentFile1 />}
        />
        <Route
          path="/month/september/filesecond"
          element={<SeptemberDocumentFile2 />}
        />
        <Route
          path="/month/september/filethird"
          element={<SeptemberDocumentFile3 />}
        />
        <Route
          path="/month/september/filefourth"
          element={<SeptemberDocumentFile4 />}
        />

        <Route
          path="/month/october/filefirst"
          element={<OctoberDocumentFile1 />}
        />
        <Route
          path="/month/october/filesecond"
          element={<OctoberDocumentFile2 />}
        />
        <Route
          path="/month/october/filethird"
          element={<OctoberDocumentFile3 />}
        />
        <Route
          path="/month/october/filefourth"
          element={<OctoberDocumentFile4 />}
        />

        <Route
          path="/month/november/filefirst"
          element={<NovemberDocumentFile1 />}
        />
        <Route
          path="/month/november/filesecond"
          element={<NovemberDocumentFile2 />}
        />
        <Route
          path="/month/november/filethird"
          element={<NovemberDocumentFile3 />}
        />
        <Route
          path="/month/november/filefourth"
          element={<NovemberDocumentFile4 />}
        />

        <Route
          path="/month/december/filefirst"
          element={<DecemberDocumentFile1 />}
        />
        <Route
          path="/month/december/filesecond"
          element={<DecemberDocumentFile2 />}
        />
        <Route
          path="/month/december/filethird"
          element={<DecemberDocumentFile3 />}
        />
        <Route
          path="/month/december/filefourth"
          element={<DecemberDocumentFile4 />}
        />
      </Routes>
    </Router>
  );
}

export default App;
