
import Section from '../../../HOC/Section';
import Link from '../../UI/Link/Link';
import sr4 from '../../images/cotton.png'
import sr1 from '../../images/sugar-cane.png'
import sr2 from '../../images/sunflower.png'
import sr3 from '../../images/wheat.png'

import React, {Component} from "react"
import {Button} from 'react-bootstrap'
//import Card from "react-bootstrap/Card";
//import {Grid, Card, Icon, Image,CardGroup } from 'semantic-ui-react'
//import {  CardImg, CardText, CardBody,  CardTitle, CardSubtitle, Button
//} from 'reactstrap';
import {Card, CardGroup,CardText, CardBody, CardTitle, CardSubtitle, CardImg} from 'reactstrap';

const home = () => {
	return (
		<div>
		<CardGroup>
		<Card style={{ width: 10 ,height:5}}>
		<CardImg top width="100%" src={sr4} ></CardImg>
		<CardBody>
		<CardTitle tag="h5">Card title</CardTitle>
		<CardText>Cotton Crop </CardText>
		<Button>Button</Button>
		</CardBody>
		</Card>
		<Card style={{ width: 10 }}>
		<CardImg top width="100%" src={sr1} ></CardImg>
		<CardBody>
		<CardTitle tag="h5">Card title</CardTitle>
		<CardText>Sugar Cane </CardText>
		<Button>Button</Button>
		</CardBody>
		</Card>
		<Card style={{ width: 10 }}>
		<CardImg top width="100%" src={sr2} ></CardImg>
		<CardBody>
		<CardTitle tag="h5">Card title</CardTitle>
		<CardText>Sunflower </CardText>
		<Button>Button</Button>
		</CardBody>
		</Card>
		<Card style={{ width: 10 }}>
		<CardImg top width="100%" src={sr3} ></CardImg>
		<CardBody>
		<CardTitle tag="h5">Card title</CardTitle>
		<CardText>Wheat </CardText>
		<Button>Button</Button>
		</CardBody>
		</Card>
		</CardGroup>
		</div>

	);
};

export default home;
