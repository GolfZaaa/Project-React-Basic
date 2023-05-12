import React from "react";
import "../../src/css/Receipt.css";

const Receipt = () => {
  return (
    <>
      <div className="print">
        <button className="download-button">
          <div className="docs">
            <svg
              className="css-i6dzq1"
              strokeLinejoin="round"
              strokeLinecap="round"
              fill="none"
              strokeWidth={2}
              stroke="currentColor"
              height={20}
              width={20}
              viewBox="0 0 24 24"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line y2={13} x2={8} y1={13} x1={16} />
              <line y2={17} x2={8} y1={17} x1={16} />
              <polyline points="10 9 9 9 8 9" />
            </svg>{" "}
            Docs
          </div>
          <div className="download">
            <svg
              className="css-i6dzq1"
              strokeLinejoin="round"
              strokeLinecap="round"
              fill="none"
              strokeWidth={2}
              stroke="currentColor"
              height={24}
              width={24}
              viewBox="0 0 24 24"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line y2={3} x2={12} y1={15} x1={12} />
            </svg>
          </div>
        </button>

        <div id="printarea">
          <p className="ql-align-right" />

                  <br />
                
          <p />
          <p />
          <p> </p>
          <p style={{ textAlign: "right" }}> </p>
          <p style={{ textAlign: "right" }} />
          <p>
            <br />
            SVNR: 3132190989 19.09.1989 WGKK 3132190989
          </p>
          <p className="ql-align-right" style={{ textAlign: "right" }}>
            Wien,am 07.07.2017
          </p>
          <p className="ql-align-center" style={{ textAlign: "center" }}>
            <strong style={{ color: "red" }}>
            <div style={{ width: "10em" }}>
                    <img src="img/logo2.png" height={80} style={{position:"relative",left:600}} />
                  </div>
            </strong>
          </p>
          <p className="ql-align-right">fortlaufende Nr.: 2017051</p>
          <p> Test789 Test789 wird wie folgt in Rechnung gestellt:</p>
          <p>
            <br />
          </p>
          <table className="table" style={{ marginBottom: "0px" }}>
            <thead style={{ fontSize: "0.7em" }}>
              <tr>
                <th style={{ padding: "2px" }}>Datum</th>
                <th style={{ padding: "2px", textAlign: "center" }}>Anzahl</th>
                <th style={{ padding: "2px", textAlign: "center" }}>Pos.</th>
                <th style={{ padding: "2px" }}>Bezeichnung</th>
                <th style={{ padding: "2px", textAlign: "right" }}>USt.%</th>
                <th style={{ textAlign: "right", padding: "2px" }}>Preis</th>
              </tr>
            </thead>
            <tbody style={{ fontSize: "0.7em" }}>
              <tr>
                <td style={{ padding: "2px" }}>06.07.2017</td>
                <td style={{ textAlign: "center", padding: "2px" }}>1</td>
                <td style={{ textAlign: "center", padding: "2px" }}>9</td>
                <td style={{ padding: "2px" }}>
                  Jede weitere Intervention im häuslichen Bereich auf der
                  gleichen Stiege, aber nicht im gemeinsamen Haushalt, nach Pos.
                  3
                </td>
                <td style={{ textAlign: "right", padding: "2px" }}>0</td>
                <td style={{ textAlign: "right", padding: "2px" }}>
                  14,00&nbsp;€
                </td>
              </tr>
              <tr>
                <td style={{ padding: "2px" }}>06.07.2017</td>
                <td style={{ textAlign: "center", padding: "2px" }}>1</td>
                <td style={{ textAlign: "center", padding: "2px" }}>1</td>
                <td style={{ padding: "2px" }}>
                  Tagesordination außerhalb der Ordinationszeit bei dringender
                  Hilfeleistung
                </td>
                <td style={{ textAlign: "right", padding: "2px" }}>0</td>
                <td style={{ textAlign: "right", padding: "2px" }}>
                  9,00&nbsp;€
                </td>
              </tr>
              <tr>
                <td style={{ padding: "2px" }}>06.07.2017</td>
                <td style={{ textAlign: "center", padding: "2px" }}>1</td>
                <td style={{ textAlign: "center", padding: "2px" }}>2 </td>
                <td style={{ padding: "2px" }}>
                  Nachtordination (zwischen 19 Uhr und 7 Uhr) außerhalb der
                  Ordinationszeit
                </td>
                <td style={{ textAlign: "right", padding: "2px" }}>0</td>
                <td style={{ textAlign: "right", padding: "2px" }}>
                  20,00&nbsp;€
                </td>
              </tr>
              <tr>
                <td style={{ padding: "2px" }}>06.07.2017</td>
                <td style={{ textAlign: "center", padding: "2px" }}>1</td>
                <td style={{ textAlign: "center", padding: "2px" }}>test2</td>
                <td style={{ padding: "2px" }}>test2</td>
                <td style={{ textAlign: "right", padding: "2px" }} />
                <td style={{ textAlign: "right", padding: "2px" }} />
              </tr>
              <tr>
                <td style={{ padding: "2px" }}>06.07.2017</td>
                <td style={{ textAlign: "center", padding: "2px" }}>1</td>
                <td style={{ textAlign: "center", padding: "2px" }}>77,78</td>
                <td style={{ padding: "2px" }}>test</td>
                <td style={{ textAlign: "right", padding: "2px" }}>10</td>
                <td style={{ textAlign: "right", padding: "2px" }}>
                  110,00&nbsp;€
                </td>
              </tr>
              <tr>
                <td style={{ padding: "2px" }}>06.07.2017</td>
                <td style={{ textAlign: "center", padding: "2px" }}>1</td>
                <td style={{ textAlign: "center", padding: "2px" }}>Neiche</td>
                <td style={{ padding: "2px" }}>Neiche Leistung</td>
                <td style={{ textAlign: "right", padding: "2px" }}>0</td>
                <td style={{ textAlign: "right", padding: "2px" }}>
                  0,00&nbsp;€
                </td>
              </tr>
              <tr>
                <td style={{ padding: "2px" }}>06.07.2017</td>
                <td style={{ textAlign: "center", padding: "2px" }}>3</td>
                <td style={{ textAlign: "center", padding: "2px" }}>78</td>
                <td style={{ padding: "2px" }}>
                  Verbandwechsel. Nicht verrechenbar bei Anbringen eines
                  Heftpflasters.
                </td>
                <td style={{ textAlign: "right", padding: "2px" }}>0</td>
                <td style={{ textAlign: "right", padding: "2px" }}>
                  36,00&nbsp;€
                </td>
              </tr>
              <tr>
                <td style={{ padding: "2px" }}>06.07.2017</td>
                <td style={{ textAlign: "center", padding: "2px" }}>1</td>
                <td style={{ textAlign: "center", padding: "2px" }}>79</td>
                <td style={{ padding: "2px" }}>
                  Zahnextraktion ohne Anästhesie
                </td>
                <td style={{ textAlign: "right", padding: "2px" }}>0</td>
                <td style={{ textAlign: "right", padding: "2px" }}>
                  7,50&nbsp;€
                </td>
              </tr>
              <tr>
                <td style={{ padding: "2px" }}>06.07.2017</td>
                <td style={{ textAlign: "center", padding: "2px" }}>2</td>
                <td style={{ textAlign: "center", padding: "2px" }}>77</td>
                <td style={{ padding: "2px" }}>
                  Reinigung/Wundtoilette einer größeren Wunde (ab 4 cm), bei
                  Bedarf chirurgische Versorgung nach jeder Methode, pro Sitzung
                  und pro Region einmal verrechenbar.
                </td>
                <td style={{ textAlign: "right", padding: "2px" }}>0</td>
                <td style={{ textAlign: "right", padding: "2px" }}>
                  200,00&nbsp;€
                </td>
              </tr>
              <tr>
                <td style={{ padding: "2px" }}>06.07.2017</td>
                <td style={{ textAlign: "center", padding: "2px" }}>1</td>
                <td style={{ textAlign: "center", padding: "2px" }}>7a</td>
                <td style={{ padding: "2px" }}>
                  Bei Krankenbesuchen, welche länger als eine halbe Stunde
                  dauern, für jede angefangene halbe Stunde: bei Tag
                </td>
                <td style={{ textAlign: "right", padding: "2px" }}>0</td>
                <td style={{ textAlign: "right", padding: "2px" }}>
                  45,00&nbsp;€
                </td>
              </tr>
              <tr>
                <td style={{ padding: "2px" }}>07.07.2017</td>
                <td style={{ textAlign: "center", padding: "2px" }}>1</td>
                <td style={{ textAlign: "center", padding: "2px" }}>test2</td>
                <td style={{ padding: "2px" }}>test2</td>
                <td style={{ textAlign: "right", padding: "2px" }} />
                <td style={{ textAlign: "right", padding: "2px" }} />
              </tr>
              <tr>
                <td />
                <td />
                <td />
                <td style={{ padding: "2px" }}>
                  <strong>Rechnungsbetrag</strong>
                </td>
                <td />
                <td style={{ textAlign: "right", padding: "2px" }}>
                  <strong>441,50&nbsp;€</strong>
                </td>
              </tr>
            </tbody>
          </table>
          <table className="table" style={{ marginTop: "5px" }}>
            <thead style={{ fontSize: "0.7em" }}>
              <tr>
                <th style={{ textAlign: "left", padding: "2px" }}>
                  Umsatzsteuersatz
                </th>
                <th> </th>
                <th> </th>
                <th style={{ textAlign: "right", padding: "2px" }}>USt.</th>
                <th style={{ textAlign: "right", padding: "2px" }}>
                  Nettobetrag
                </th>
                <th style={{ textAlign: "right", padding: "2px" }}>Summe</th>
              </tr>
            </thead>
            <tbody style={{ fontSize: "0.7em" }}>
              <tr>
                <td style={{ padding: "2px" }}>
                  0% <small>Umsatzsteuerbefreit gemäß §6 (1) 19 UStG</small>
                </td>
                <td />
                <td />
                <td style={{ textAlign: "right", padding: "2px" }}>
                  331,50&nbsp;€
                </td>
                <td style={{ textAlign: "right", padding: "2px" }}>
                  0,00&nbsp;€
                </td>
                <td style={{ textAlign: "right", padding: "2px" }}>
                  331,50&nbsp;€
                </td>
              </tr>
              <tr>
                <td>10%</td>
                <td />
                <td />
                <td style={{ textAlign: "right", padding: "2px" }}>
                  100,00&nbsp;€
                </td>
                <td style={{ textAlign: "right", padding: "2px" }}>
                  10,00&nbsp;€
                </td>
                <td style={{ textAlign: "right", padding: "2px" }}>
                  110,00&nbsp;€
                </td>
              </tr>
            </tbody>
          </table>
          <p />
          <p>
            <br />
          </p>
          <p>
            <span className="medium">Dauerdiagnosen</span>
          </p>
          <ul>
            <li>Mundtrockenheit</li>
            <li>R68.2 - Mundtrockenheit</li>
          </ul>
          <p />
          <p>
            Bitte überweisen Sie den Betrag an die folgenden Kontodaten:
            <br />
            IBAN: AT26120001234567891011121314
            <br />
            BIC: BKAUATWWXXX
          </p>
          <p>Stempel und Unteschrift</p>
          <span />
        </div>
      </div>
    </>
  );
};

export default Receipt;
