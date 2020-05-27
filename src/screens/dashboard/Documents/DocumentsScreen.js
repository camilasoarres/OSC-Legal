/* eslint-disable react/jsx-key */
/* eslint-disable no-nested-ternary */

// Libs
import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

// Components
import Header from '../components/Header';
import Button from '../../../components/Button';
import HeaderModal from '../components/HeaderModal';

// Images
import DocumentUser from '../../../assets/document-user.svg';
import ImageDocument from '../../../assets/document.png';
import magnifyingGlass from '../../../assets/magnifyingGlass.svg';
import DownloadIcon from '../../../assets/download.svg';
import DownloadWhiteIcon from '../../../assets/downloadwhite.svg';
import Exit from '../../../assets/exit.svg';
import DeleteIcon from '../../../assets/delete.svg';
import DeleteIconWhite from '../../../assets/deleteWhite.svg';
import EditIcon from '../../../assets/edit.svg';
import EditIconWhite from '../../../assets/editWhite.svg';
import documentWhite from '../../../assets/documentWhite.svg';
import ArrowDownIcon from '../../../assets/caminho.svg';
import ArrowUpIcon from '../../../assets/arrow-up.svg';

// Redux
import { addNewDocument, deleteDocument } from '../../../dataflow/modules/documents-modules';

// Api
import { createTemplate } from '../../../api';

const mapStateToProps = state => ({
	documentsList: state.documents.documentsList,
	email: state.onboarding.users.email,
	password: state.onboarding.users.password,
	name: state.onboarding.users.name,
	isAdmin: state.onboarding.users.isAdmin,
	organization: state.organization.tableDatas,
});

const mapDispatchToProps = dispatch => ({
	addNewDocument: info => dispatch(addNewDocument(info)),
	deleteDocument: info => dispatch(deleteDocument(info)),
});

const Container = styled.div`
  width: 100%;
	height: 90%;

	@media (max-width: 490px) {
		height: 45%;
	}
`;

const Content = styled.div`
	width: 100%;
	height: ${props => (props.isAdmin ? 'calc(100vh - -3px - 6.5rem)' : 'calc(100vh - -3px - 5.5rem)')};
	display: flex;
	align-items: center;
	justify-content: center;
	background: ${props => (props.isAdmin ? '#FFFFFF' : '#FFCFCD')};

	@media(max-width: 1400px) and (max-height: 900px){
		min-height: 83.5vh;
	}

	@media(max-width: 1024px) and (max-height: 1366px){
		min-height: 94vh;
	}

	@media(max-width: 768px){
		min-height: 92.6vh;
	}
`;

const MaximumWidth = styled.div`
	padding: ${props => (props.isAdmin ? '5.5rem 1rem 0' : '2rem 0 0')};
	margin-top: ${props => (props.isAdmin ? '0' : '2rem')};
	width: ${props => (props.isAdmin ? '100%' : '96%')};
	min-width: ${props => (props.isAdmin ? '100%' : '95%')};
	max-width: 1440px;
	height: ${props => (props.isAdmin ? '100%' : 'calc(100vh - 0px - 5.8rem - 1.5rem)')};
	display: flex;
	background: #FFF;
	overflow-y: hidden;

	@media(max-width: 768px){
		height: ${props => (props.isAdmin ? '100%' : 'calc(100vh - 0px - 6.8rem - 0px)')};
	}

	@media(max-width: 648px){
		padding: 0;
		margin: 0;
		height: 100vh;
		width: 100%;
	}
`;

const Teste = styled.div`
	width: 64%;
	@media(max-width: 648px) {
		width: 100%;
	}
`;

const ContainerHeader = styled.div`
	padding-right: 3rem;
  display: flex;
  justify-content: flex-end;

	@media (max-width: 1024px) {
		padding-right: 2.7rem;
	}

	@media (max-width: 768px) {
		padding-right: 1.1rem;
	}

	@media (max-width: 490px) {
		padding-right: 0;
		margin: 1.2rem;
	}
`;

const AddModelImage = styled.img`
	width: 180px;
	margin-bottom: 1.5rem;

	@media (max-width: 1024px) {
		width: 140px;
	}

	@media (max-width: 768px) {
		width: 120px;
	}

	@media (max-width: 490px) {
		display: none;
	}
`;

const TitleSearch = styled.p`
	padding-bottom: 2rem;
  color: #85144B;
  font-size: 2rem;
  font-family: "Overpass", Black;
  font-weight: 900;

	@media (max-width: 1024px) {
		font-size: 1.5rem;
	}

	@media (max-width: 768px) {
		width: 60%;
		font-size: 1.5rem;
		text-align: center;
	}

	@media (max-width: 490px) {
		display: none;
	}
`;

const ContainerContent = styled.div`
	padding-top: 3rem;
	padding-right: 2.4rem;
	width: 100%;
	display: flex;
	justify-content: center;

	@media(max-width: 1024px) {
		padding-right: 1rem;
	}

	@media (max-width: 768px) {
		padding-right: 0;
		padding-top: 2rem;
	}
	@media (max-width: 490px) {
		padding: 0 0.4rem 0 1rem;
		flex-direction: column;
	}
`;

const ContainerAddModel = styled.div`
	${''}
	width: 34%;
	display: flex;
	align-items: center;
	flex-direction: column;

	${'' /* @media(max-width: 1440px) {
		max-width: 40%;
	} */}

	@media(max-width: 768px){
		width: 35%;
		padding: 0;
	}

	@media (max-width: 490px) {
		display: none;
	}
`;

const ContainerAddModelMob = styled.div`
	display: none;

	@media(max-width: 648px) {
		display: flex;
		width: 100%;
    justify-content: center;
		display: ${props => (props.list === '' ? 'flex' : 'none')};
	}
`;

const InitialAddModel = styled.div`
	width: 100%;
	height: 11rem;
	display: flex;
	text-align: center;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	color: #959595;
	border: 1px solid #959595;
	border-radius: 3px;

	@media (max-width: 1024px) {
		padding: 0 1%;
		width: 95%;
	}

	@media (max-width: 768px) {
		padding: 0 5%;
		width: 100%;
	}

	@media (max-width: 490px) {
		width: 100%;
		padding: 0 6%;
		margin-bottom: 2rem;
	}
`;

const ContainerScroll = styled.div`
	max-height: 73vh;
	width: 100%;
	max-height: 65vh;
	overflow-y: scroll;
	display: ${props => (props.initialModel ? 'none' : 'inline-block')};
	margin-right: 1rem;

	::-webkit-scrollbar {
  width: 7px;
	}

	::-webkit-scrollbar-track {
  background: #fff;
	}

	::-webkit-scrollbar-thumb {
  	background: #FFCFCD;
	}

	::-webkit-scrollbar-thumb:hover {
  	background: #f9bdbb;
	}

	@media (max-width: 1680px) {
		max-height: 69vh;
	}

	@media (max-width: 1440px) {
		max-height: 65vh
	}

	@media(max-width: 768px) {
		max-height: 85vh
	}

	@media (max-width: 490px) {
		min-width: 100%;
		min-height: 50vh;
		padding-bottom: 10rem;
		margin: 0;
		display: flex;
		justify-content: center;
		padding: 0 .2rem;
	}
`;

const TitleInitialAddModel = styled.h2`
	font-size: 1.5rem;
  font-family: "Overpass", Black;
	font-weight: 900;

	@media (max-width: 768px) {
		font-size: 1.2rem;
	}
`;

const TextInitialAddModel = styled.p`
	font-size: 1.2rem;
  font-family: "Overpass", Regular;
	font-weight: 300;

	span {
		color: #85144B;
		text-decoration: underline;
		cursor: pointer;
		text-underline-position: under;
	}

	@media (max-width: 768px) {
		font-size: 1rem;
	}

	@media (max-width: 490px) {
		margin-top: 1rem;
	}
`;

const ContainerSearch = styled.div`
	margin-right: .5rem;
	width: 60%;
	display: flex;
	justify-content: flex-end;
	align-items: center;

	@media (max-width: 1024px) {
		margin-right: 1.1rem;
		width: 65%;
	}

	@media (max-width: 768px) {
		margin-right: 0;
    width: 90%;
	}

	@media (max-width: 490px) {
		width: 100%;
		margin-right: 0;
		display: flex;
		justify-content: center;
	}
`;

const SearchText = styled.p`
  color: #231F20;
  font-size: 1.3rem;
  font-family: Overpass, Bold;
	font-weight: 600;
  margin-right: 1rem;

	@media (max-width: 490px) {
		display: none;
	}
`;

const ContainerSearchInput = styled.label`
	display: flex;
	width: ${props => (props.isAdmin ? '70%' : '65%')};
	border-radius: 3px;
	padding: 0.2rem 1rem 0.1rem 1rem;
	margin-right: .3rem;
	border: 0.5px solid #85144B;
	border-bottom-right-radius: ${props => (props.filter ? '0' : '3px')};
	border-bottom-left-radius: ${props => (props.filter ? '0' : '3px')};
	align-items: center;
	justify-content: space-between;
	position: relative;
	cursor: ${props => (props.isAdmin ? 'none' : 'pointer')};

	img {
		margin: 0.4rem 0 0.5rem 0.5rem;
    width: 1.09rem;
	}

	@media (max-width: 490px) {
		width: 100%;
		margin: 0;
	}
`;

const SearchInput = styled.input`
  width: 100%;
	border: 0;
	max-width: 100%;
	outline: none;
	padding-left: .5rem;
	font-size: 1rem;
	font-family: Overpass, Regular;
	color: #85144B;

	@media (max-width: 1024px) {
		font-size: 0.9rem;
	}

	@media (max-width: 768px) {
		font-size: .8rem;
	}

	@media (max-width: 490px) {
		font-size: 1rem;
	}
`;

const ContainerModels = styled.div`
	width: 100%;
	display: ${(props => (props.initialModel ? 'none' : 'flex'))};
	flex-direction: column;

	@media (max-width: 490px) {
    margin-bottom: 10rem;
	}

	@media (max-width: 490px) {
		width: 100%;
		margin-bottom: 0;
	}
`;

const ContainerModel = styled.div`
	margin-bottom: 1rem;
	padding: 2rem;
	width: 100%;
	border-radius: 3px;
	height: 100%;
	display: flex;
	cursor: pointer;
	position: relative;
	z-index: ${props => (props.zIndex ? '-1' : 0)};
	align-self: center;

	&:hover {
		border: 1px solid #85144B;

		&::before {
			content: '';
			background: #85144B;
			width: 1px;
			height: 100%;
			top: 0;
			right: 12rem;
			position: absolute;

			@media (max-width: 1024px) {
				right: 10.5rem;
			}

			@media (max-width: 768px) {
				right: 9rem;
			}

			@media (max-width: 490px) {
				width: 10rem;
				height: 1px;
				display: ${props => (props.displayBefore ? 'none' : 'flex')};
				margin-top: 20.6%;
    		top: 100%;
				z-index: 1;
				right: 0;
			}

			@media (max-width: 375px) {
				margin-top: 23.2%;
			}
		}
	}

	@media (max-width: 1024px) {
		padding-right: 1.1rem;
		width: 95%;
	}

	@media (max-width: 768px) {
		padding: 1.3rem 1rem 1.3rem 1.3rem;
		width: 100%;
	}

	@media (max-width: 490px) {
		width: 100%;
		padding: 1rem;
		height: 7rem;
		order: 3;
		z-index: initial;
	}
`;

const ContainerModelDescription = styled.div`
	width: ${props => (props.modal ? '95%' : '76%')};
	display: flex;
	flex-direction: column;
	justify-content: center;
	cursor: pointer;
	border-radius: 3px;
	border: ${props => (props.isSelected ? '1px solid #85144B' : 'none')};
	padding: ${props => (props.addDocument ? '1rem 0 1rem 0' : '0')};

	@media(max-width: 768px){
		width: ${props => (props.modal ? '100%' : '68%')};
	}

	@media(max-width: 490px){
		width: 100%;
	}

	&:hover {
		border: ${props => (props.hidden ? '1px solid #85144B' : '0')};
		border-radius: ${props => (props.isAdmin ? '0' : '3px')};
	}

	span {
		display: flex;
		padding: ${props => (props.isAdmin ? '0' : '0 1rem')};

		@media (max-width: 490px) {
			width: 100%;
		}
	}

`;

const ModelNumber = styled.h2`
	margin-right: 0.5rem;
	color: #FF4136;
	font-family: "Overpass", Black;
	font-size: 1.5rem;

	@media (max-width: 490px) {
		font-size: 1.2rem;
	}
`;

const ModelTitle = styled.h2`
	margin-bottom: .5rem;
  color: #85144B;
  font-family: "Overpass", Black;

	@media (max-width: 768px) {
		font-size: 1.3rem;
	}

	@media (max-width: 490px) {
		font-size: 1rem;
	}
`;

const ModelParagraph = styled.p`
  max-width: 98%;
  font-size: 1.2rem;
  font-family: 'Overpass', Regular;
	word-wrap: break-word;
	padding: ${props => (props.isAdmin ? '0' : '0 1rem')};


	@media (max-width: 768px) {
		font-size: 1rem;

	}
	@media (max-width: 490px) {
		width: 100%;
		font-size: .8rem;
		line-height: 1.3rem;
	}
`;

const ContainerOptions = styled.div`
	display: ${props => (props.contOptions ? 'flex' : 'none')};
	width: 25%;
	align-items: flex-end;
	justify-content: center;
	flex-direction: column;

	@media (max-width: 490px) {
		.Edit {
			display: none;
		}
	}

	@media (max-width: 1024px) {
		width: 25%;
		padding: 0 0 0 3.4%;
	}

	@media (max-width: 768px) {
		width: 30%;
		padding: 0 0 0 4.5%;
	}

	@media (max-width: 490px) {
		position: absolute;
		width: 160px;
		height: 130px;
    top: 100%;
		margin-top: .6rem;
    right: 0rem;
    border: 1px solid #85144B;
		z-index: 2;
		background: #ffffff;
		align-items: center;
		border-radius: 3px;
		padding: 0;
	}
`;

const Option = styled.button`
	margin-bottom: 1rem;
	width: 8rem;
	height: 2.5rem;
	padding: 0 1rem;
	display: flex;
	justify-content: space-between;
	background: transparent;
	border: none;
	border-radius: 4px;

	&:hover {
		background: #FF4136;
	}

	@media (max-width: 768px) {
		width: 7rem;
		padding: 0 0.8rem;
	}

	@media (max-width: 490px) {
		align-self: center;
		margin-bottom: 0;
		height: 100%;
		width: 100%;
		padding: 0 15%;
		border-radius: initial;
	}
`;

const OptionImage = styled.img`
`;

const OptionText = styled.span`
	color: ${props => (props.colorTextButton)};
	font-size: 1.2rem;
	font-family: "Overpass", SemiBold;

	p {
		margin-right: 0.8rem;
	}

	@media (max-width: 768px) {
		font-size: 1rem;
	}

	@media (max-width: 490px) {
		font-size: 1.3rem;
    margin-left: 0.8rem;
	}
`;

const ContainerModal = styled.div`
	width: 100%;
	height: 100vh;
	position: fixed;
	top: 0;
	right: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 1;
	background: rgba(112, 112, 112, 0.5);

	@media (max-width: 490px) {
		flex-direction: column;
	}
`;

const ModalAddModel = styled.form`
	width: 660px;
	min-height: 580px;
	background: #FFFFFF;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	border-radius: 4px;
	padding: 1rem 1.5rem;

	@media (max-width: 1024px) {
		height: 540px;
	}

	@media (max-width: 490px) {
		height: 100vh;
		width: 100%;
		position: absolute;
		top: 0%;
		padding: 5%;
	}
`;

// const LogoAndData = styled.div`
// 	display: none;

// 	@media (max-width: 490px) {
// 		display: flex;
// 		justify-content: space-between;
// 		margin-bottom: 10%;
// 	}
// `;

// const ParagraphContainer1 = styled.p`
// 	font-size: 1.25rem;
// 	font-family: "Overpass", Light;
// 	margin-top: 1.2rem;

// 	@media (max-width: 859px) {
// 		font-size: 1rem;
// 	}

// 	@media (max-width: 685px) {
// 		margin-top: 0;
// 	}

// 	@media (max-width: 648px) {
// 		font-size: 0.8rem;
// 	}
// `;

// const ParagraphSair = styled.p`
//   color: #85144B;
//   font-family: Overpass, SemiBold;
// 	font-size: 1rem;
// 	cursor: pointer;
// 	align-self: flex-end;
// 	text-transform: uppercase;
// `;

const HeaderAddModel = styled.div`
	display: flex;
	justify-content: space-between;

	img {
		width: 20px;
		height: 20px;
		cursor: pointer;
	}
`;

const TitleAddModel = styled.h2`
	color: #85144B;
	font-size: 2rem;
	margin-top: 2%;
	margin-bottom: 1%;
	margin-left: 1rem;
  font-family: "Overpass", Bold;
  font-weight: 900;

	@media (max-width: 490px) {
		font-size: 1.5rem;
		margin-bottom: 1rem;
	}
`;

const ContainerInputs = styled.div`
	display: flex;
	flex-direction: column;

	@media(max-width: 648px){
		height: 80%;
	}
`;

const UploadFile = styled.label`
	width: 100%;
	display: flex;
	margin-bottom: 1rem;
	border-radius: 3px;
	padding: 3% 2.5%;
	border: ${props => (props.isError === true ? '2px solid #F00' : '1px solid #FFCFCD')};
	background: #FAFAFA;
	font-size: 1.1rem;
	font-family: "Overpass", SemiBold;

	@media(max-width: 490px){
		margin-bottom: 2rem;
	}

	input[type='file'] {
		display: none;
	}
	img {
		width: 50px;
	}
`;

const TextUploadFile = styled.div`
	width: 34%;
	display: flex;
	flex-direction: column;
	margin-left: 1rem;
	font-family: "Overpass", SemiBold;
	font-size: .9rem;
	color: #959595;

	h3 {
		font-family: "Overpass", Bold;
		margin-bottom: .5rem;
		font-size: 1.1rem;
		color:${props => (props.file === null ? '#959595' : 'green')};
	}
	span {
		cursor: pointer;
		text-decoration: underline;
		${''}
	}
	@media (max-width: 490px) {
		width: 52%;
	}
`;

const ContainerInput = styled.label`
`;

const TitleInputs = styled.h3`
	color: #85144B;
	font-size: .8rem;
	margin-left: 1rem;
	margin-bottom: 0.2rem;
  font-family: "Overpass", Bold;
  font-weight: 600;
	text-transform: uppercase;
`;

const Input = styled.input`
	width: 100%;
	margin-bottom: 1rem;
	border-radius: 3px;
	padding: 3% 2.5%;
	border: ${props => (props.isError === true ? '2px solid #F00' : '1px solid #FFCFCD')};
	background: #FAFAFA;
	font-size: 1rem;
	font-family: "Overpass", SemiBold;

	@media(max-width: 490px){
		margin-bottom: 2.5rem;
	}
`;

const TextArea = styled.textarea`
	width: 100%;
	height: 150px;
	border-radius: 3px;
	padding: 3% 2.5%;
	margin-bottom: .5rem;
	border: ${props => (props.isError === true ? '2px solid #F00' : '1px solid #FFCFCD')};
	background: #FAFAFA;
	font-size: 1rem;
	font-family: "Overpass", SemiBold;

	@media (max-width: 490px) {
		height: 9.37rem;
		margin-bottom: 2rem;
		width: 100%;
	}
	resize: none;
`;

// const ButtonAdd = styled(Button)`
// 	align-self: flex-end;
// 	width: 18.75rem;
// 	height: 4rem;
// 	font-size: 1.2rem;
// 	margin: 0;
// 	text-transform: uppercase;

// 	@media (max-width: 1024px) {
// 		font-size: .9rem;
// 		width: 55%;
// 		padding: .8rem;
// 	}

// 	@media (max-width: 768px) {
// 		width: 45%;
// 		padding: 1rem;
// 		font-size: 1.3rem;
// 		margin: 0;
// 	}

// 	@media (max-width: 490px) {
// 		width: 90%;
// 		font-size: 1.2rem;
// 		align-self: center;
// 	}
// `;

const ContainerModalDelete = styled(ContainerModal)`
	@media (max-width: 490px) {
		background: #ffffff;
	}
`;

const ModalDelete = styled.div`
	background: #FFF;
	width: 480px;
	padding: 1% 1% 1% 1%;


	@media (max-width: 490px) {
		width: 100%;
		height: 100vh;
		padding: 5%;
		    display: flex;
    justify-content: space-between;
    flex-direction: column;
	}
`;

const TitleModal = styled(HeaderAddModel)`
	img {
		width: 20px;
		height: 20px;
		cursor: pointer;
	}
`;

const TitleDelete = styled(TitleAddModel)`
	margin-left: 0;
`;

const WrapTextModal = styled.div`
	@media (max-width: 490px) {
		height: 30%;
    display: flex;
    ${''}
    flex-direction: column;
		${''}
	}
`;

const TextModal = styled.p`
	margin: 1.5rem  0;
	font-size: 1rem;
	font-family: 'Overpass', Regular;
	color: #404040;

	strong {
		font-family: 'Overpass', Bold;
		color: #404040;
	}
	@media (max-width: 490px) {
		margin: 0;
		font-size: 1.3rem;
	}
`;

const ButtonsModal = styled.div`
	display: flex;
	margin-top: 5%;
	align-items: center;
	justify-content: space-between;
	width: 100%;

	@media (max-width: 490px) {
		margin: 0;
		width: 100%;
	}
`;

const ButtonCancel = styled.button`
	width: 50%;
	height: 3.5rem;
	color: #F00;
	border-radius: 4px;
	border: none;
	background: #FFF;
	font-size: 1rem;
	font-family: "Overpass", Bold;
	font-weight: 600;
	margin-right: 1rem;

	@media (max-width: 490px) {
		margin: 0;
	}
`;

// const ButtonConfirm = styled(Button)`
// 	margin: 5% 0 0 0;
// 	width: 50%;
// 	height: 3.5rem;

// 	@media (max-width: 1024px) {
// 		margin: 5% 0 0 0;
// 		width: 50%;
// 	}

// 	@media (max-width: 490px) {
// 		margin: 0;
// 		position: initial;
// 		width: 100%;
// 	}
// `;

const ErrorText = styled.p`
	color: #f00;
	width: 100%;
	text-align: right;
	margin-bottom: .5rem;
	font-size: .9rem;
	font-family: Overpass;
`;

const BoxOrgs = styled.div`
	width: 100%;
	max-height: 35vh;
	overflow-y: ${props => (props.orgs.length < '5' ? 'none' : 'scroll')};
	display: flex;
	flex-direction: column;
	border-radius: 3px;
	border: 1px solid #85144B;
	${''}
	position: absolute;
	right: 0;
	left: 0;
	top: 1.8rem;
	border-top-left-radius: ${props => (props.isBoxOrgs ? 0 : '3px')};
	border-top-right-radius: ${props => (props.isBoxOrgs ? 0 : '3px')};
	background: #FFF;
	z-index: 99;

	::-webkit-scrollbar {
  width: 7px;
	}

	::-webkit-scrollbar-track {
  background: #fff;
	}

	::-webkit-scrollbar-thumb {
  	background: #FFCFCD;
	}

	::-webkit-scrollbar-thumb:hover {
  	background: #f9bdbb;
	}

	@media (max-width: 490px) {
		z-index: 6;
	}
`;

const Org = styled.div`
	color: #85144B;
	font-size: .9rem;
	font-family: 'Overpass', Regular;
	font-weight: 400;
	cursor: pointer;
	width: 100%;
	padding: .5rem 1rem;

	:hover{
		background: #FFCFCD;
		border: .5px solid #85144B;
	}
`;

const TextOrg = styled.p`
	font-size: .9rem;
	color: ${props => (props.select === '' ? '#959595' : '#85144B')};
	font-family: 'Overpass', Regular;
`;

const Modal = styled.div`
	width: 45.3rem;
	height: 90vh;
	background: #FFF;
	border-radius: 4px;
	display: flex;
	flex-direction: column;
	padding: .5rem 1.5rem;

	@media (max-width: 768px) {
		width: 40rem;
	}

	@media (max-width: 490px) {
		width: 100%;
		height: 100%;
		z-index: 10;
		padding: .5rem 1rem;
	}
`;

const BoxTitle = styled.span`
	width: 100%;
	display: flex;
	flex-direction: column;
	padding: 1rem 1rem 0 1rem;

	@media(max-width: 648px) {
		padding: 2rem 1rem 0 1rem;
	}
`;

const SubtitleModal = styled.p`
	font-size: 1.1rem;
	color: #959595;
	font-family: 'Overpass', Regular;
	margin-bottom: 1rem;
`;

const TitleModalList = styled.h2`
	color: #85144B;
	font-size: 2rem;
	font-family: Overpass;
	margin: 1rem 0 .5rem 0;

	@media (max-width: 490px) {
		font-size: 1.8rem;
	}
`;

const BoxModelsDoc = styled.span`
	width: 100%;
	height: 80%;
	display: flex;
	flex-direction: column;
	overflow-y: scroll;
	margin-bottom: 1rem;

	::-webkit-scrollbar {
  width: 10px;
	}

	::-webkit-scrollbar-track {
  background: #fff;
	}

	::-webkit-scrollbar-thumb {
  	background: #FFCFCD;
	}

	::-webkit-scrollbar-thumb:hover {
  	background: #f9bdbb;
	}
`;

const ButtonModalList = styled.button`
	width: 18rem;
	height: 3.5rem;
	background: #FF4136;
	color: #FFF;
	text-transform: uppercase;
	border-radius: 3px;
	border: none;
	align-self: flex-end;
	margin-top: 1rem;
	font-weight: bold;
	font-size: 1rem;

	@media (max-width: 490px) {
		width: 100%;
		height: 4.5rem;
	}
`;

const ImageExit = styled.img`
	width: 20px;
	align-self: flex-end;
	position: absolute;
	margin-top: .5rem;
	cursor: pointer;

	@media(max-width: 490px){
		top: 6rem;
		right: 1.5rem;
	}
`;

const SpanButton = styled.span`
	width: 100%;
	display: flex;
	justify-content: flex-end;
`;

let newList = [];
class DocumentsScreen extends Component {
	state = {
		changeColorLabel: false,
		options: false,
		selectedOptions: '',
		modalDelete: false,
		addModel: false,
		downloadExport: DownloadIcon,
		downloadEdit: EditIcon,
		downloadDelete: DeleteIcon,
		modelSelect: '',
		search: '',
		searching: false,
		hoverExport: '',
		hoverEdit: '',
		hoverDelete: '',
		colorTextExport: '',
		colorTextEdit: '',
		colorTextDelete: '',
		redirect: false,
		isFile: null,
		document: {
			title: '',
			description: '',
			id: 0,
		},
		isError: false,
		isErrorDescription: false,
		isErrorTitle: false,
		isErrorFile: false,
		isErrorTitleQtd: false,
		isBoxOrgs: false,
		ishovering: false,
		modalListDoc: false,
		listDocs: [],
		selectOrg: '',
		isOrg: false,
		isMobileButton: false,
		userSelectDoc: '',
		isErrorDoc: false,
	};


	createTemplate = async (title, description, isFile) => {
		try {
			// eslint-disable-next-line no-unused-vars
			const response = await createTemplate(title, description, isFile);
		} catch (err) {
			// eslint-disable-next-line no-console
			console.log('err', err);
		}
	}


	handleOnOptions = (item) => {
		this.setState({
			options: true,
			selectedOptions: item,
		});
	}

	handleOnOptionsUser = (docs) => {
		this.setState({
			options: true,
			selectedOptions: docs,
		});
	}

	handleOffOptions = () => {
		this.setState({
			options: false,
			selectedOptions: '',
		});
	}

	handleAddModel = () => {
		this.setState({
			addModel: true,
		});
	}

	handleCancelAddModel = () => {
		this.setState({
			addModel: false,
			isError: false,
			isFile: null,
			isErrorDescription: false,
			isErrorFile: false,
			isErrorTitle: false,
			isErrorTitleQtd: false,
		});
	}

	handleModalDelete = () => {
		this.setState({
			modalDelete: true,
			options: false,
		});
	}

	handleCancelDelete = () => {
		this.setState({
			modalDelete: false,
		});
	}

	handleModelChange = (field, e) => {
		const { document } = this.state;
		document[field] = e.target.value;
		this.setState({
			document,
			isError: false,
			isErrorFile: false,
			isErrorTitle: false,
			isErrorDescription: false,
			isErrorTitleQtd: false,
			file: this.state.isFile,
		});
	}

	handleChangeColorExport = (item) => {
		this.setState({
			downloadExport: DownloadWhiteIcon,
			hoverExport: item,
			colorTextExport: '#ffffff',
		});
	}

	handleChangeColorExportUser = (docs) => {
		this.setState({
			downloadExport: DownloadWhiteIcon,
			hoverExport: docs,
			colorTextExport: '#ffffff',
		});
	}

	handleChangeColorLeaveExport = () => {
		this.setState({
			downloadExport: DownloadIcon,
			hoverExport: '',
			colorTextExport: '#85144B',
		});
	}

	handleChangeColorEditUser = (docs) => {
		this.setState({
			downloadEdit: EditIconWhite,
			hoverEdit: docs,
			colorTextEdit: '#ffffff',
		});
	}

	handleChangeColorLeaveEdit = () => {
		this.setState({
			downloadEdit: EditIcon,
			hoverEdit: '',
			colorTextEdit: '#85144B',
		});
	}

	handleChangeColorDelete = (item) => {
		this.setState({
			downloadDelete: DeleteIconWhite,
			hoverDelete: item,
			colorTextDelete: '#ffffff',
		});
	}

	handleChangeColorLeaveDelete = () => {
		this.setState({
			downloadDelete: DeleteIcon,
			hoverDelete: '',
			colorTextDelete: '#85144B',
		});
	}

	handleChangeColorDeleteUser = (docs) => {
		this.setState({
			downloadDelete: DeleteIconWhite,
			hoverDelete: docs,
			colorTextDelete: '#FFF',
		});
	}

	handleChangeColorEdit = (docs) => {
		this.setState({
			downloadEdit: EditIconWhite,
			hoverEdit: docs,
			colorTextEdit: '#FFF',
		});
	}

	handleChangeColorLeaveEdit = () => {
		this.setState({
			downloadEdit: EditIcon,
			hoverEdit: '',
			colorTextEdit: '#85144B',
		});
	}

	handleChangeColorLeaveDelete = () => {
		this.setState({
			downloadDelete: DeleteIcon,
			hoverDelete: '',
			colorTextDelete: '#85144B',
		});
	}

	uploadFile = (e) => {
		e.preventDefault();
		// eslint-disable-next-line no-undef
		const reader = new FileReader();
		const file = e.target.files[0];

		reader.onloadend = () => {
			this.setState({
				isFile: reader.result,
				isErrorFile: false,
			});
		};
		reader.readAsDataURL(file);
	}

	handleSelected = (item) => {
		this.setState({
			modelSelect: item,
		});
	}

	handleDelete = () => {
		this.props.deleteDocument(this.state.modelSelect.id);
		this.setState({
			modelSelect: '',
		});
		this.handleCancelDelete();
	}

	handleSearch = (e) => {
		this.setState({
			search: e.target.value,
		});
	}

	handleOnKey = (ev) => {
		if (ev.key === 'Enter') {
			this.setState({
				searching: true,
			});
		} else if (this.state.search === '') {
			this.setState({
				searching: false,
			});
		}
	}

	handleOnKeySeach = () => {
		this.setState({
			searching: true,
		});
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.handleErrors();
	}

	componentDidMount() {
		this.renderMobileButton();
	}

	renderMobileButton = () => {
		if (window.innerWidth < '500') {
			this.setState({
				isMobileButton: true,
			});
		} else {
			this.setState({
				isMobileButton: false,
			});
		}
	}

	handleErrors = () => {
		const { title, description } = this.state.document;
		const { isFile } = this.state;

		if (isFile === null) {
			this.setState({
				isErrorFile: true,
			});
		} else {
			this.setState({
				isErrorFile: false,
			});
		}
		if (description === '') {
			this.setState({
				isErrorDescription: true,
			});
		} else {
			this.setState({
				isErrorDescription: false,
			});
		}
		if (title === '') {
			this.setState({
				isErrorTitle: true,
				isErrorTitleQtd: false,
			});
		} else {
			this.setState({
				isErrorTitle: false,
			});
		}
		if (title.length < 4 && title.length > 0) {
			this.setState({
				isErrorTitleQtd: true,
			});
		} else {
			this.setState({
				isErrorTitleQtd: false,
			});
		}
		if (title === '' && description === '' && isFile === null) {
			this.setState({
				isError: true,
				isErrorTitle: false,
				isErrorDescription: false,
				isErrorFile: false,
				isErrorTitleQtd: false,
			});
		}
		if (title !== '' && title.length > 4 && description !== '' && isFile !== null) {
			this.props.addNewDocument({
				title, description, isFile,
			});
			this.createTemplate(title, description, isFile);

			this.setState({
				document: {},
				isFile: null,
			});

			this.handleCancelAddModel();
		}
	}

	handleRedirect = () => {
		this.setState({ redirect: true });
	}

	openBoxOrgs = (ev) => {
		ev.stopPropagation();
		this.setState({
			isBoxOrgs: !this.state.isBoxOrgs,
		});
	}

	closeBoxOrgs = () => {
		this.setState({
			isBoxOrgs: false,
		});
	}

	openModalListDoc = () => {
		this.setState({
			modalListDoc: true,
		});
	}

	closeModalListDoc = () => {
		this.setState({
			modalListDoc: false,
		});
	}

	selecetedDocUser = (docs) => {
		let doc = docs;

		if (this.state.listDocs.find(item => item === docs)) {
			doc = {
				...doc,
				id: doc.id + 1,
			};
		}

		newList = this.state.listDocs.concat(doc);
		this.setState({
			isSelected: doc,
		});
	}

	handleDocsUser = (e) => {
		e.preventDefault();
		this.setState({
			modalListDoc: false,
			listDocs: newList,
			isSelected: '',
			isErrorDoc: false,
		});
	}

	handleSelectOrg = (orgs) => {
		this.setState({
			selectOrg: orgs,
			isBoxOrgs: false,
		});
	}

	userSelectedDoc = (docs) => {
		this.setState({
			userSelectDoc: docs,
		});
	}

	deleteUserDoc = () => {
		this.setState({
			listDocs: this.state.listDocs.filter(doc => doc !== this.state.userSelectDoc),
			modalDelete: false,
		});
	}

	delete = () => {
		if (this.props.isAdmin === true) {
			this.handleDelete();
		} else {
			this.deleteUserDoc();
		}
	}

	renderModalModels = () => {
		const Messages = [
			'Adicione um nome ao seu modelo',
			'Adicione uma descrição para o seu modelo',
			'Adicione um modelo',
			'Preencha todos os campos',
			'Nome do modelo deve ter no mínimo 4 letras',
		];
		return (
			<ContainerModal onClick={this.handleCancelAddModel}>
				<ModalAddModel
					onSubmit={this.handleSubmit}
					onClick={ev => ev.stopPropagation()}
				>
					<HeaderModal/>

					<HeaderAddModel>
						<TitleAddModel>Adicionar Modelo</TitleAddModel>
						<img onClick={this.handleCancelAddModel} src={Exit} alt="Sair" />
					</HeaderAddModel>
					<ContainerInputs>
						<UploadFile
							validationModel={this.state.validationModel}
							htmlFor='upload-file'
							isError={this.state.isError}
						>
							<input
								onChange={this.uploadFile}
								id='upload-file'
								type="file"
							/>
							<img src={documentWhite} alt="Anexar Documento" />
							<TextUploadFile file={this.state.isFile}>
								<h3>{this.state.isFile === null ? 'Adicionar modelo' : 'Modelo adicionado'}</h3>
								<p>
									<span>Clique aqui</span>
									{this.state.isFile !== null && ' para adicionar outro.'}
								</p>
							</TextUploadFile>
						</UploadFile>
						{this.state.isErrorFile && <ErrorText>{Messages[2]}</ErrorText>}
						<ContainerInput>
							<TitleInputs>Nome do modelo</TitleInputs>
							<Input
								required
								validationModel={this.state.validationModel}
								value={this.state.document.title}
								onChange={e => this.handleModelChange('title', e)}
								type="text"
								placeholder="Digitar o nome do documento"
								isError={this.state.isError}
							/>
							{this.state.isErrorTitleQtd && <ErrorText>{Messages[4]}</ErrorText>}
							{this.state.isErrorTitle && <ErrorText>{Messages[0]}</ErrorText>}
						</ContainerInput>
						<ContainerInput>
							<TitleInputs>Descrição</TitleInputs>
							<TextArea
								validationModel={this.state.validationModel}
								value={this.state.document.description}
								onChange={e => this.handleModelChange('description', e)}
								type="text"
								placeholder="Como esse documento é usado"
								isError={this.state.isError}
							/>
							{this.state.isErrorDescription && <ErrorText>{Messages[1]}</ErrorText>}
						</ContainerInput>
					</ContainerInputs>
					<span>
						{this.state.isError && <ErrorText>{Messages[3]}</ErrorText>}
					</span>
					<SpanButton>
						<Button
							width="20.25rem"
							height="3.5rem"
							text="Adicionar"
							type="submit"
							widthMobileSmall="100%"
							onClick={this.handleSubmit}
							fontSize="1.2rem"
						/>
					</SpanButton>
				</ModalAddModel>
			</ContainerModal>
		);
	}

	renderModalDelete = () => (
		<ContainerModalDelete onClick={this.handleCancelDelete}>
			<ModalDelete onClick={e => e.stopPropagation()}>
				<TitleModal>
					<TitleDelete>Excluir Modelo</TitleDelete>
					<img onClick={this.handleCancelDelete} src={Exit} alt="Sair" />
				</TitleModal>
				<WrapTextModal>
					<TextModal>
						Após ser excluido, um modelo não pode ser recuperado.
					</TextModal>
					<TextModal>
						Você deseja excluir o <strong>{this.state.modelSelect.title
						|| this.state.userSelectDoc.title}</strong> permanentemente?
					</TextModal>
				</WrapTextModal>
				<ButtonsModal>
					<ButtonCancel onClick={this.handleCancelDelete}>Cancelar</ButtonCancel>
					<Button
						onClick={this.delete}
						width="50%"
						height="3.5rem"
						text="Confirmar"
					/>
				</ButtonsModal>
			</ModalDelete>
		</ContainerModalDelete>
	)

	renderModalListDoc = () => (
		<ContainerModal onClick={this.closeModalListDoc}>
			<Modal onClick={ev => ev.stopPropagation()}>
				{this.state.isMobileButton ? <HeaderModal /> : null}
				<ImageExit src={Exit} alt="exit" onClick={this.closeModalListDoc}/>
				<BoxTitle>
					<TitleModalList>Adicionar Documento</TitleModalList>
					<SubtitleModal>Escolha um modelo da lista abaixo</SubtitleModal>
				</BoxTitle>
				<BoxModelsDoc>
					{this.props.documentsList.map((docs, index) => (
						<ContainerModelDescription
							modal={this.state.modalListDoc}
							list={this.state.listDocs}
							hidden={this.state.modalListDoc}
							addDocument={this.state.modalListDoc}
							onClick={() => this.selecetedDocUser(docs)}
							isSelected={docs === this.state.isSelected}
						>
							<span key={index}>
								<ModelNumber>{index + 1}</ModelNumber>
								<ModelTitle>{docs.title}</ModelTitle>
							</span>
							<ModelParagraph isAdmin={this.state.isAdmin}>{docs.description}</ModelParagraph>
						</ContainerModelDescription>
					))}
				</BoxModelsDoc>
				{this.state.isErrorDoc && <ErrorText>Documento já adicionado</ErrorText>}
				<ButtonModalList onClick={this.handleDocsUser}>Escolher</ButtonModalList>
			</Modal>
		</ContainerModal>
	)

	render() {
		const documentsList = (this.state.search !== '' && this.state.searching === true)
			? this.props.documentsList.filter(model => model.title.match(new RegExp(this.state.search, 'i')))
			: this.props.documentsList;
		const { isAdmin } = this.props;

		return (
			<Container onClick={this.handleClickedLabelLeave || this.closeBoxOrgs}>
				<Header />
				<Content isAdmin={this.props.isAdmin} isMobileButton={this.state.isMobileButton}>
					<MaximumWidth isAdmin={this.props.isAdmin}>
						<ContainerAddModel>
							{isAdmin ? <TitleSearch>Modelos de Documentos</TitleSearch> : <TitleSearch>Documentos</TitleSearch>}
							{
								isAdmin ? (
									<AddModelImage src={ImageDocument} />
								) : (
									<AddModelImage src={DocumentUser} />
								)}
							{isAdmin
								? (
									<Button
										width="17.5rem"
										height="4.5rem"
										margin="1rem 0 0 0"
										text="Adicionar Modelo"
										onClick={this.handleAddModel}
										hidden={this.state.addModel || this.state.deleteModal}
										widthMobileSmall="95%"
										positionMb="fixed"
										bottom='0'
										widthTablet="14rem"
										left="11px"
										fontSize="1.3rem"
									/>
								) : (
									this.state.selectOrg !== '' ? (
										<Button
											width="17.5rem"
											height="4.5rem"
											margin="1rem 0 0 0"
											onClick={this.openModalListDoc}
											hidden={this.state.modalListDoc}
											text="Adicionar Documento"
											widthTablet="14rem"
											fontSize="1.3rem"
										/>
									) : null
								)}
						</ContainerAddModel>
						<Teste>
							<ContainerHeader>
								<ContainerSearch>
									<SearchText>
										{isAdmin ? 'Pesquisar' : 'Organização'}
									</SearchText>
									<ContainerSearchInput
										filter={this.state.isBoxOrgs}
										onClick={this.openBoxOrgs}
									>
										{isAdmin
											? <SearchInput
												onChange={this.handleSearch}
												onKeyUp={this.handleOnKey}
												placeholder="Digite aqui para pesquisar"
											/> : <TextOrg
												isOrg={this.state.isOrg}
												select={this.state.selectOrg}
											>
												{this.state.selectOrg === '' ? 'Selecionar organizações' : this.state.selectOrg}
											</TextOrg>}
										{isAdmin
											? <img
												onClick={this.handleOnKeySeach}
												src={magnifyingGlass}
												alt="Lupa"
												style={{ cursor: 'pointer' }}
											/>
											: this.state.isBoxOrgs
												? <img src={ArrowUpIcon}
													alt="arrow"
													style={{ cursor: 'pointer' }}
													onClick={this.openBoxOrgs}
												/> : <img src={ArrowDownIcon}
													alt="arrow"
													style={{ cursor: 'pointer' }}
													onClick={this.openBoxOrgs}
												/>
										}
										{this.state.isBoxOrgs && isAdmin === false ? (
											<BoxOrgs
												onClick={ev => ev.stopPropagation()}
												isBoxOrgs={this.state.isBoxOrgs}
												orgs={this.props.organization}
											>
												<Org onClick={() => this.setState({ selectOrg: '' })}>Selecionar organizações</Org>
												{this.props.organization.map((orgs, index) => (
													<Org
														key={index}
														onClick={() => this.handleSelectOrg(orgs.tradingName)}
													>
														{orgs.tradingName}
													</Org>
												))}
											</BoxOrgs>
										) : null}
									</ContainerSearchInput>
								</ContainerSearch>
							</ContainerHeader>
							<ContainerContent>
								<ContainerScroll>
									<ContainerModels>
										{isAdmin ? (
											// MAP DOCUMENTS ADM
											documentsList && documentsList.length > 0 ? (
												documentsList.map((item, index) => (
													<ContainerModel key={index}
														zIndex={this.state.addModel}
														displayBefore={this.state.modalDelete}
														onMouseEnter={() => this.handleOnOptions(item)}
														onMouseLeave={this.handleOffOptions}>
														<ContainerModelDescription>
															<span>
																<ModelNumber>{index + 1}</ModelNumber>
																<ModelTitle>{item.title}</ModelTitle>
															</span>
															<ModelParagraph>{item.description}</ModelParagraph>
														</ContainerModelDescription>
														<ContainerOptions
															contOptions={this.state.options && (this.state.selectedOptions === item)}>
															<Option
																onMouseEnter={() => this.handleChangeColorExport(item)}
																onMouseLeave={this.handleChangeColorLeaveExport}
															>
																<OptionImage
																	src={this.state.hoverExport === item ? this.state.downloadExport : DownloadIcon}
																	alt="Exportar" />
																<OptionText
																	colorTextButton={
																		this.state.hoverExport === item ? this.state.colorTextExport : '#85144B'
																	}
																>
																	Exportar
																</OptionText>
															</Option>
															<Option
																onMouseEnter={() => this.handleChangeColorDelete(item)}
																onMouseLeave={this.handleChangeColorLeaveDelete}
																onClick={this.handleModalDelete}
															>
																<OptionImage
																	src={this.state.hoverDelete === item ? this.state.downloadDelete : DeleteIcon}
																	alt="Deletar" />
																<OptionText
																	colorTextButton={
																		this.state.hoverDelete === item ? this.state.colorTextDelete : '#85144B'
																	}
																	onClick={() => this.handleSelected(item)}
																>
																	<p>Excluir</p>
																</OptionText>
															</Option>
														</ContainerOptions>
													</ContainerModel>
												))
											) : (
												// QUANDO NÃO TEM DOC NO ADM
												<InitialAddModel>
													<TitleInitialAddModel>
													Você ainda não possui um modelo
													</TitleInitialAddModel>
													<TextInitialAddModel>
												Escolha um modelo de documento
												clicando em <span onClick={this.handleAddModel}>Adicionar Modelo</span>
													</TextInitialAddModel>
												</InitialAddModel>
											)
										) : (
											// MAP DOCUMENTS USER
											this.state.listDocs && this.state.listDocs.length > 0 ? (
												this.state.listDocs.map((docs, index) => (
													<ContainerModel
														key={index}
														zIndex={this.state.modalListDoc}
														displayBefore={this.state.modalDelete}
														onMouseEnter={() => this.handleOnOptionsUser(docs, index)}
														onMouseLeave={this.handleOffOptions}
														onClick={() => this.handleOnOptionsUser(docs, index)}
														option={this.state.options}
													>
														<ContainerModelDescription>
															<span>
																<ModelNumber>{index + 1}</ModelNumber>
																<ModelTitle>{docs.title}</ModelTitle>
															</span>
															<ModelParagraph>{docs.description}</ModelParagraph>
														</ContainerModelDescription>
														<ContainerOptions
															contOptions={this.state.options && (this.state.selectedOptions === docs)}>
															<Option
																onMouseEnter={() => this.handleChangeColorExportUser(docs)}
																onMouseLeave={this.handleChangeColorLeaveExport}
															>
																<OptionImage
																	src={this.state.hoverExport === docs ? this.state.downloadExport : DownloadIcon}
																	alt="Exportar" />
																<OptionText
																	colorTextButton={
																		this.state.hoverExport === docs ? this.state.colorTextExport : '#85144B'
																	}
																>
																	Exportar
																</OptionText>
															</Option>

															<Option
																onMouseEnter={() => this.handleChangeColorEditUser(docs)}
																onMouseLeave={this.handleChangeColorLeaveEdit}
																onClick={() => { }}
															>
																<OptionImage src={this.state.hoverEdit === docs ? this.state.downloadEdit : EditIcon} />
																<OptionText
																	colorTextButton={this.state.hoverEdit === docs ? this.state.colorTextEdit : '#85144B'}
																>
																	<p>Editar</p>
																</OptionText>

															</Option>
															<Option
																onMouseEnter={() => this.handleChangeColorDeleteUser(docs)}
																onMouseLeave={this.handleChangeColorLeaveDelete}
																onClick={this.handleModalDelete}
															>
																<OptionImage
																	src={this.state.hoverDelete === docs ? this.state.downloadDelete : DeleteIcon}
																	alt="Deletar" />
																<OptionText
																	colorTextButton={this.state.hoverDelete === docs
																		? this.state.colorTextDelete : '#85144B'}
																	onClick={() => this.userSelectedDoc(docs)}
																>
																	<p>Excluir</p>
																</OptionText>
															</Option>
														</ContainerOptions>
													</ContainerModel>
												))
											) : (
												// QUANDO USER NÃO TEM DOC
												<InitialAddModel>
													<TitleInitialAddModel>
														Você ainda não tem nenhum documento
													</TitleInitialAddModel>
													<TextInitialAddModel>
														{this.state.selectOrg === '' ? (
															'Selecione uma organização para adicionar um documento'
														) : (
															<>
																Escolha um modelo de documento clicando em
																<span style={{ marginLeft: '.3rem' }} onClick={this.openModalListDoc}>
																	Adicionar Documento
																</span>
															</>
														)}
													</TextInitialAddModel>
												</InitialAddModel>
											)
										)}

										<ContainerAddModelMob list={this.state.listDocs}>
											<Button	onClick={this.openModalListDoc}>
												Adicionar Documento
											</Button>
										</ContainerAddModelMob>
										{isAdmin ? (
											this.state.isMobileButton === true && this.state.addModel !== true ? (
												<Button
													width="17.5rem"
													height="4.5rem"
													marginMobile="0 0 1rem 0"
													widthMobileSmall="95%"
													bottom="0"
													left="11px"
													positionMb="fixed"
													onClick={this.handleAddModel}
													text="Adicionar Modelo"
													fontSizeMobile="1.2rem"
												/>
											) : (
												null
											)
										) : (
											this.state.isMobileButton === true
											&& this.state.modalListDoc !== true && this.state.selectOrg !== '' ? (
													<Button
														width="17.5rem"
														height="4.5rem"
														marginMobile="0 0 1rem 0"
														widthMobileSmall="95%"
														bottom="0"
														left="11px"
														positionMb="fixed"
														onClick={this.openModalListDoc}
														text="Adicionar Documento"
														fontSizeMobile="1.2rem"
													/>
												) : (
													null
												)
										)}
										{this.state.addModel && this.renderModalModels()}
										{this.state.modalDelete && this.renderModalDelete()}
										{this.state.modalListDoc && this.renderModalListDoc()}
									</ContainerModels>
								</ContainerScroll>
							</ContainerContent>
						</Teste>
					</MaximumWidth>
				</Content>
			</Container>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(DocumentsScreen);
