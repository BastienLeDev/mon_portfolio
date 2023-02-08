import React, { Component } from 'react';
import autoBind from 'react-autobind';
import PenduSchema from './PenduSchema';
import { randomWord } from './Words';
import FieldWord from './FieldWord';
import { Container, Col, Row } from "react-bootstrap"
import words from './WordList';

const maxLife = 11;
const GOOD_LETTER = 2;
const BAD_LETTER = -1;
const LETTER_ALREADY_PLAYED = -2;

class jeux extends Component {

    constructor(props) {
        super(props);
        //Permet de pouvoir créer un bind pour concerver le this
        //Même principe que le @autobind
        autoBind(this);
        let word = randomWord(words)
        this.state = {
            currentWord: word,
            currentLetterFound: [],
            letters: '',
            currentTry: 0,
            disabled: 'disabled',
            currentTryLetter: '',
            tryedLetters: [],
            score: 0
        };
    }

    componentDidMount() {
        this.setState({ letters: this.test });

    }

    handleKeyEvent(e) {
        if (e.currentTarget.value === '') {
            this.setState({ disabled: 'disabled', currentTryLetter: '' });
        } else if (e.currentTarget.value !== '') {
            this.setState({ disabled: '', currentTryLetter: e.currentTarget.value });
        }
    }

    verifyMatchingMap(letter) {
        let array = [...this.state.currentWord];
        let match = false;
        array.map((arr) => {
            if (arr[1] === letter) {
                match = true;
            }
            return match;
        });
        return match;
    }

    handleClickEvent() {
        if (this.verifyMatchingMap(this.state.currentTryLetter)) {
            let result = this.state.currentTryLetter.toString();
            let test = false;
            this.state.currentLetterFound.forEach((letter) => {
                if (letter === this.state.currentTryLetter) {
                    test = true;
                }
            });
            if (!test) {
                this.state.currentLetterFound.push(result);
                this.setState({ letters: this.test, score: this.state.score + GOOD_LETTER });
            }
        } else {
            this.verifyLetterUsed(this.state.currentTryLetter);
            this.setState({ currentTry: this.state.currentTry + 1 });
        }
    }

    isLoose() {
        return this.state.currentTry > maxLife;
    }

    verifyLetterUsed(testedLetter) {
        let test = false;
        this.state.tryedLetters.forEach((letter) => {
            if (letter === testedLetter) {
                test = true;
            }
        });
        if (test) {
            this.setState({ score: this.state.score + LETTER_ALREADY_PLAYED });
        } else {
            this.setState({ score: this.state.score + BAD_LETTER });
        }
        this.state.tryedLetters.push(testedLetter);
    }

    render() {
        if (!this.isLoose()) {
            return (this.playRender());
        } else {
            return (this.LooseRender());
        }
    }

    get test() {
        let test = '';
        let letterfound = false;
        this.state.currentWord.forEach((value, key, map) => {
            this.state.currentLetterFound.forEach((letter) => {
                if (letter === value || letter === key) {
                    letterfound = true;
                }
            });
            if (letterfound) {
                test = test + value;
                letterfound = false;
            } else {
                test = test + ' _';
            }
        });
        return test;
    }

    isWon() {
        let test = this.test;
        let count = 0;
        let pos = test.indexOf("_");
        while (pos !== -1) {
            count++;
            pos = test.indexOf("_", pos + 1);
        }
        return count === 0;
    }

    //Render utilisé pour quand l'on a pas perdu
    playRender() {
        let isWon = this.isWon();

        return (
            <div>
                <Container style={{

                    marginTop: "",
                    marginLeft: ""
                }}>
                    <Row>
                        <Col md={2}>
                        </Col>


                        <Col md={6}>
                            <PenduSchema currentTry={this.state.currentTry} />
                            <br />
                        </Col>
                        <Col md={4} style={{

                            marginTop: "100px",
                            marginLeft: ""
                        }}>
                            <h1 style={{ textAlign: "center" }}>Jeu du <span className='blue'>pendu</span></h1>
                            <br></br>
                            <p style={{ textAlign: "left", justifyContent: "center" }}>Vous avez 12 essais pour trouver le bon mot. Ce jeu du pendu contient uniquement des mots du portfolio.</p>
                            <ul style={{ textAlign: "left", justifyContent: "center" }}>
                                <li>Ne pas utiliser de majuscules ! </li>
                                <li>Lettre correcte :  +1 point</li>
                                <li>Lettre incorrecte : -1 point</li>
                                <li>Plusieurs fois une lettre incorrecte : -2 points</li>
                                <li> 12 essais</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <div className="page-header text-center">
                            <h3>Essais n° {this.state.currentTry + 1}</h3>
                        </div>

                        <Col style={{ marginBottom: "20px" }} md={12}>
                            <h1 style={{ textAlign: "center" }}>{this.state.letters}</h1>
                        </Col>
                    </Row>
                    <Row>
                        <div className="page-header text-center">
                            <h5>Score : {this.state.score}</h5>
                        </div>
                    </Row>
                    {isWon && (
                        <Row>

                            <Col md={12}>
                                <p style={{ textAlign: "center" }}>Gagné !</p>
                            </Col>
                            <Row>
                                <Col md={4}></Col>
                                <Col md={4}>
                                    <button className="btn btn-primary form-control" onClick={this.initGame}>Rejouer ?</button>
                                </Col>
                            </Row>
                        </Row>
                    )}
                </Container>
                <br />
                {!isWon && (<FieldWord disabled={this.state.disabled} onChange={this.handleKeyEvent} onClick={this.handleClickEvent} />)}
            </div>
        )
            ;
    }
    LooseRender() {
        return (

            <Container style={{
                marginTop: "300px"
            }}>
                <Row>
                    <Col md={4}></Col>
                    <Col md={4}>
                        <div className="page-header text-center"><h1>Vous avez Perdu</h1></div>
                        <br />
                        <button className="btn btn-primary form-control" onClick={this.initGame}>Rejouer ?</button>
                    </Col>
                </Row>
            </Container>

        )
            ;
    }

    //Fonction utilisé quand l'on veux rejouer
    //Re initialise les paramètres de bases
    initGame() {
        let newWord = randomWord(words);
        this.setState({
            currentWord: newWord,
            currentLetterFound: [],
            letters: '',
            currentTry: 0,
            disabled: 'disabled',
            currentTryLetter: '',
            tryedLetters: [],
            score: 0
        })

    }

}
export default jeux;