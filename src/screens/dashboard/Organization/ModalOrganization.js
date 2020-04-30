// Libs
import React, { Component } from 'react';
import styled from 'styled-components';
// import { Link, Redirect } from 'react-router-dom';

// Components
import ImageClose from '../../../assets/fechar.svg';
// import ImageEdit from '../../../assets/edit.svg';
// import ImageDelete from '../../../assets/delete.svg';
import ImageSeta from '../../../assets/setaLado.svg';

// Image
import authorizationIcon from '../../../assets/authorization.svg';
import payIcon from '../../../assets/pay.svg';
import freeIcon from '../../../assets/free.svg';
import extendDeadlineIcon from '../../../assets/extendDeadline.svg';

const Overlay = styled.div`
	max-height: 100vh;
	width: 100vw;
	height: 100vh;
	background-color: #707070a1;
	display: flex;
  justify-content: center;
  align-items: center;
	position: fixed;
	z-index: 3;
`;

const Container = styled.div`
	width: 80%;
	margin: 1rem;
	/* height: 80%; */
	display: flex;
	justify-content: center;
	flex-direction: column;
	background-color: #FFFFFF;
	/* opacity: 10; */


	@media (max-width: 935px) {
		width: 95%;
		margin: 0;
		/* height: 80%; */
	}

	@media (max-width: 648px) {
		width: 100%;
		height: 100vh;
		margin: 0;
		overflow-x: hidden;
		overflow-y: scroll;
	}
`;

const Image = styled.img`
	display: flex;
	align-self: flex-end;
	padding: 1rem;
	cursor: pointer;

	@media (max-width: 798px) {
		padding: 0.8rem 0.5rem;
	}

	@media (max-width: 648px) {
		display: none;
	}
`;

const ImageS = styled.img`
	display: none;

	@media (max-width: 648px) {
		display: flex;
		margin: 0 0 2rem 1rem;
	}

	@media (max-width: 410px) {
		/* padding: 30rem 0 3rem 1rem; */
	}
`;

const ContentConsultorItem = styled.div`
	width: 90%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin-left: 3.4rem;

	@media (max-width: 935px) {
		width: 98%;
		flex-wrap: wrap;
		justify-content: space-between;
		margin-left: 1rem;
		padding-right: 1rem;
	}
`;

const ContentConsultorDetails = styled.div`
	display: flex;
	flex-direction: row;
	/* justify-content: space-around; */
`;

const Title = styled.h2`
	color: #231F20;
	font-size: 1.25rem;
	font-family: Overpass, ExtraBold;
	padding-top: 2rem;
	padding-bottom: 1.7rem;
	margin-left: 3.4rem;
	text-transform: uppercase;

	@media (max-width: 935px) {
		margin-left: 1rem;
	}
`;

const Content = styled.span`
  /* height: 50%; */
	/* padding: 0 1rem 0 0; */
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin: ${props => (props.margin && '0 3.4rem')};

	@media (max-width: 935px) {
		margin: ${props => (props.margin && '0 1rem')};
	}

	@media (max-width: 648px) {
		flex-direction: column-reverse;
	}
`;

const SpanOrganization = styled.span`
	/* height: 50%; */
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin: ${props => (props.margin && '0 3.4rem')};
	padding: 0 0 2rem;

	@media (max-width: 935px) {
		margin: ${props => (props.margin && '0 1rem')};
	}

	@media (max-width: 768px) {
		flex-flow: wrap;
	}
`;

const ContentConsultor = styled.span`
	width: 60%;
	display: flex;
	flex-direction: column;

	@media (max-width: 648px) {
		width: 100%;
		/* height: 30vh; */
		padding: 0 0 2rem;
		flex-flow: wrap;
	}
`;

// const ImageEdite = styled.img`
// 	display: flex;
//  flex-direction: row;
// 	padding-bottom: 1rem;
// `;

const ContentSubTitle = styled.div`
	/* width: 60%; */

	@media (max-width: 648px) {
		width: 100%;
		display: flex;
		flex-direction: row;
    justify-content: space-between;
    margin: 0 1rem;
	}
`;

const ContentModal = styled.div`
	width: 35%;
  color: #85144B;
	padding-left: 3rem;
  border-left: 1px solid;
	display: flex;
	flex-direction: column;

	@media (max-width: 648px) {
    width: 100%;
		border-left: 0;
    border-bottom: 1px solid;
		padding: 0 0 1.5rem;
	}
`;

// const ContainerEdit = styled.div`
// 	display: flex;
// 	flex-direction: column;

// 	@media (max-width: 648px) {
// 		display: none;
// 	}
// `;

// const SpanContainer = styled.span`
// 	display: flex;
// 	flex-direction: row;
// `;

// const ContainerOption = styled.p`
// 	color: #85144B;
// 	font-family: Overpass, Regular;
// 	font-size: 1.2rem;
// 	margin-left: 0.3rem;
// `;

const SubTitle = styled.p`
  color: #85144B;
	font-size: 0.75rem;
	font-family: Overpass, Bold;
	font-weight: 600;
  text-transform: uppercase;

	@media (max-width: 648px) {
		/* font-size: 0.625rem; */
	}
`;

const SubAnswer = styled.p`
	color: #231F20;
	font-size: 0.9rem;
	font-family: "Overpass", Light;
	margin: 0.5rem 0 0.8rem 0;

	@media (max-width: 648px) {
		font-size: 1rem;
	}
`;

const Separation = styled.div`
	/* display: flex; */

	@media (max-width: 648px) {
		display: none;
	}
`;

const SeparationMobile = styled.div`
	display: none;

	@media (max-width: 648px) {
		display: flex;
		flex-direction: column;
	}
`;

const Parte2 = styled.span`
	/* height: 50%; */
	background-color: #FFCFCD;
	display: flex;
	flex-direction: column;
	padding-bottom: 1.5rem;

	@media (max-width: 648px) {

	}
`;

// const ContainerEditImage = styled.div`
// 	display: none;

// 	@media (max-width: 648px) {
//     width: 100%;
// 		height: 7vh;
// 		display: flex;
// 		justify-content: center;
// 		justify-content: space-evenly;
// 		background-color: #FFFFFF;
// 		bottom: 0;
//    align-items: center;
//    position: fixed;
// 	}
// `;

// const SpanContainerImage = styled.div`
// 	  display: flex;
//    flex-direction: row;
// `;

const ContainerPaymentMethod = styled.div`
	display: flex;
	flex-direction: row;
	/* padding-left: 0.7rem; */

	:hover {
		border-bottom: 4px solid #FF4136;
		color: #FF4136;
		margin-top: 0.7rem;
	}
`;

const ContainerSelected = styled.div`
		display: none;

		@media (max-width: 648px) {
			/* height: 7vh; */
			width: 100%;
			padding: 1rem 0;
			display: flex;
			justify-content: center;
			justify-content: space-evenly;
			background-color: #FFFFFF;
			bottom: 0;
			align-items: center;
			position: fixed;
 	}
`;

const PaymentMethodText = styled.p`
	color: ${props => (props.color)};
	padding-left: 0.3rem;
`;


class ModalOrganization extends Component {
	constructor(props) {
		super(props);
		this.state = {
			paymentMethodList: [
				{
					img: authorizationIcon,
					desc: 'Autorizar',
				},
				{
					img: payIcon,
					desc: 'Pago',
				},
				{
					img: freeIcon,
					desc: 'Isento',
				},
				{
					img: extendDeadlineIcon,
					desc: 'Prorrogar',
				},
			],
		};
	}

	render() {
		const { item } = this.props;
		console.log('item', this.props.item);
		return (
			<Overlay onClick={this.props.handleCloseModal}>
				<Container>
					<Content>
						<ContentConsultor>
							<Title>consultor</Title>
							<ContentConsultorItem>
								<div>
									{/* <SubTitle>nome</SubTitle> */}
									{/* <SubAnswer>{item.admin.name}</SubAnswer> */}
									<SubTitle>Erlane</SubTitle>
									<SubAnswer>Erlane Mendes</SubAnswer>

									{/* <SubTitle>rg</SubTitle> */}
									{/* <SubAnswer>{item.admin.rg}</SubAnswer> */}
									<SubTitle>Identidade</SubTitle>
									<SubAnswer>123456789-3</SubAnswer>
								</div>
								<div>
									{/* <SubTitle>data de nascimento</SubTitle> */}
									{/* <SubAnswer>{item.admin.dateOfBirth}</SubAnswer> */}
									<SubTitle>Nascimento</SubTitle>
									<SubAnswer>12/45/6789</SubAnswer>
									{/* <SubTitle>cpf</SubTitle> */}
									{/* <SubAnswer>{item.cpf}</SubAnswer> */}
									<SubTitle>Cpf</SubTitle>
									<SubAnswer>123.456.789-43</SubAnswer>
								</div>
								<div>
									{/* <SubTitle>email</SubTitle> */}
									{/* <SubAnswer>{item.email}</SubAnswer> */}
									<SubTitle>Email</SubTitle>
									<SubAnswer>email@gmail.com</SubAnswer>
									{/* <SubTitle>telefone</SubTitle> */}
									{/* <SubAnswer>{item.telephone}</SubAnswer> */}
									<SubTitle>Celular</SubTitle>
									<SubAnswer>(12)3456-7893</SubAnswer>
								</div>
							</ContentConsultorItem>
						</ContentConsultor>
						<ContentModal>
							<Image src={ImageClose} onClick={this.props.handleCloseModal} />
							<div>
								<ImageS src={ImageSeta} onClick={this.props.handleCloseModal} />
							</div>
							<ContentConsultorDetails>
								<ContentSubTitle>
									<div>
										{/* <SubTitle>criado em</SubTitle> */}
										{/* <SubAnswer>{item.createdIn}</SubAnswer> */}
										<SubTitle>Criado</SubTitle>
										<SubAnswer>12/34/5678</SubAnswer>
									</div>
									<div>
										{/* <SubTitle>autorizado em</SubTitle> */}
										{/* <SubAnswer>{item.authorization}</SubAnswer> */}
										<SubTitle>Autorizado</SubTitle>
										<SubAnswer>13/56/7893</SubAnswer>
									</div>
									<div>
										{/* <SubTitle>vencimento</SubTitle> */}
										{/* <SubAnswer>{item.dueDate}</SubAnswer> */}
										<SubTitle>Vencimento</SubTitle>
										<SubAnswer>45/67/8931</SubAnswer>
									</div>
								</ContentSubTitle>
								{/* <ContainerEdit>
									<SpanContainer>
										<ImageEdite src={ImageEdit}/>
										<ContainerOption>Editar</ContainerOption>
									</SpanContainer>
									<SpanContainer>
										<img src={ImageDelete}/>
										<ContainerOption>Excluir</ContainerOption>
									</SpanContainer>
								</ContainerEdit> */}
							</ContentConsultorDetails>
						</ContentModal>
					</Content>
					<Parte2>
						<Title>organização</Title>
						<SpanOrganization margin>
							<Separation>
								{/* <SubTitle>nome fantasia</SubTitle> */}
								{/* <SubAnswer>{item.admin.fantasyName}</SubAnswer> */}
								<SubTitle>Fantasia</SubTitle>
								<SubAnswer>Israel Matheus</SubAnswer>
								{/* <SubTitle>nome razão</SubTitle> */}
								{/* <SubAnswer>{item.admin.reasonSocial}</SubAnswer> */}
								<SubTitle>Razão</SubTitle>
								<SubAnswer>Princeso</SubAnswer>
							</Separation>
							<Separation>
								{/* <SubTitle>cnpj</SubTitle>
								<SubAnswer>{item.admin.cnpj}</SubAnswer> */}
								<SubTitle>Cnpj</SubTitle>
								<SubAnswer>1234541656789-3</SubAnswer>
								{/* <SubTitle>telefone</SubTitle>
								<SubAnswer>{item.telephone}</SubAnswer> */}
								<SubTitle>Tel</SubTitle>
								<SubAnswer>(21)99558-9213</SubAnswer>
							</Separation>
							<Separation>
								{/* <SubTitle>email</SubTitle>
								<SubAnswer>{item.email}</SubAnswer> */}
								<SubTitle>E-mail</SubTitle>
								<SubAnswer>israel@gmail.com</SubAnswer>
								{/* <SubTitle>endereço</SubTitle>
								<SubAnswer>{item.admin.address}</SubAnswer> */}
								<SubTitle>Endereço</SubTitle>
								<SubAnswer>Rua do Beco</SubAnswer>
							</Separation>
							<Separation>
								{/* <SubTitle>complemento</SubTitle>
								<SubAnswer>{item.admin.complement}</SubAnswer> */}
								<SubTitle>Complemento</SubTitle>
								<SubAnswer>casa</SubAnswer>
								{/* <SubTitle>bairro</SubTitle>
								<SubAnswer>{item.admin.neighborhood}</SubAnswer> */}
								<SubTitle>Bairro</SubTitle>
								<SubAnswer>Gamboa</SubAnswer>
							</Separation>
							<Separation>
								{/* <SubTitle>cep</SubTitle>
								<SubAnswer>{item.admin.cep}</SubAnswer> */}
								<SubTitle>Cep</SubTitle>
								<SubAnswer>20.2410-410</SubAnswer>
								{/* <SubTitle>cidade</SubTitle>
								<SubAnswer>{item.admin.city}</SubAnswer> */}
								<SubTitle>Cidade</SubTitle>
								<SubAnswer>Rio de janeiro</SubAnswer>
							</Separation>
							<SeparationMobile>
								{/* <SubTitle>nome fantasia</SubTitle>
								<SubAnswer>{item.admin.fantasyName}</SubAnswer> */}
								<SubTitle>Identidade</SubTitle>
								<SubAnswer>123456789-3</SubAnswer>
								{/* <SubTitle>email</SubTitle>
								<SubAnswer>{item.email}</SubAnswer> */}
								<SubTitle>Identidade</SubTitle>
								<SubAnswer>123456789-3</SubAnswer>
								{/* <SubTitle>cnpj</SubTitle>
								<SubAnswer>{item.admin.cnpj}</SubAnswer> */}
								<SubTitle>Identidade</SubTitle>
								<SubAnswer>123456789-3</SubAnswer>
								{/* <SubTitle>complemento</SubTitle>
								<SubAnswer>{item.admin.complement}</SubAnswer> */}
								<SubTitle>Identidade</SubTitle>
								<SubAnswer>123456789-3</SubAnswer>
								{/* <SubTitle>bairro</SubTitle>
								<SubAnswer>{item.admin.neighborhood}</SubAnswer> */}
								<SubTitle>Identidade</SubTitle>
								<SubAnswer>123456789-3</SubAnswer>
							</SeparationMobile>
							<SeparationMobile>
								{/* <SubTitle>nome razão</SubTitle>
								<SubAnswer>{item.admin.reasonSocial}</SubAnswer> */}
								<SubTitle>Identidade</SubTitle>
								<SubAnswer>123456789-3</SubAnswer>
								{/* <SubTitle>telefone</SubTitle>
								<SubAnswer>{item.telephone}</SubAnswer> */}
								<SubTitle>Identidade</SubTitle>
								<SubAnswer>123456789-3</SubAnswer>
								{/* <SubTitle>endereço</SubTitle>
								<SubAnswer>{item.admin.address}</SubAnswer> */}
								<SubTitle>Identidade</SubTitle>
								<SubAnswer>123456789-3</SubAnswer>
								{/* <SubTitle>cep</SubTitle>
								<SubAnswer>{item.admin.cep}</SubAnswer> */}
								<SubTitle>Identidade</SubTitle>
								<SubAnswer>123456789-3</SubAnswer>
								{/* <SubTitle>cidade</SubTitle>
								<SubAnswer>{item.admin.city}</SubAnswer> */}
								<SubTitle>Identidade</SubTitle>
								<SubAnswer>123456789-3</SubAnswer>
							</SeparationMobile>
						</SpanOrganization>
					</Parte2>
					{/* <ContainerEditImage>
						<SpanContainerImage>
							<img src={ImageEdit}/>
							<ContainerOption>Editar</ContainerOption>
						</SpanContainerImage>
						<SpanContainerImage>
							<img src={ImageDelete}/>
							<ContainerOption>Excluir</ContainerOption>
						</SpanContainerImage>
					</ContainerEditImage> */}
					{/* <div>
						{this.state.admin.map(item =>)}
					</div> */}
					<ContainerSelected>
						{this.state.paymentMethodList.map(item => <ContainerPaymentMethod>
							<img src={item.img}></img>
							<PaymentMethodText>{item.desc}</PaymentMethodText>
						</ContainerPaymentMethod>)}
					</ContainerSelected>
				</Container>
			</Overlay>
		);
	}
}

export default ModalOrganization;
