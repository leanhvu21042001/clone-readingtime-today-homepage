import React from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { AiOutlineDown, AiOutlinePlus } from 'react-icons/ai';
import { BiLogoFacebookCircle, BiLogoInstagram } from 'react-icons/bi';
import { MdOutlineKeyboardArrowUp } from 'react-icons/md';

import './style.scss';

const HomePage = () => {
	return (
		<div className='homepage'>
			<header id='page-header' className='header'>
				<div className='logo'>
					<img
						src='http://www.readingtime.today/themes/readingtime/img/header-logo.png'
						alt='readingtime-today-logo'
					/>
				</div>
				<nav className='navbar'>
					<div className='links'>
						<div className='nav-item'>
							<a href='/#!' className='link'>
								리딩타임이란
							</a>
							<AiOutlineDown />
						</div>

						<div className='nav-item'>
							<a href='/#!' className='link'>
								수업후기
							</a>
						</div>
						<div className='nav-item'>
							<a href='/#!' className='link'>
								무료체험 신청
							</a>
						</div>
						<div className='nav-item'>
							<a href='/#!' className='link'>
								이용권 구매
							</a>
						</div>
						<div className='nav-item'>
							<a href='/#!' className='link'>
								고객센터
							</a>
							<AiOutlineDown />
						</div>
					</div>

					<div className='actions'>
						<button>Login</button>
						<button>Join us</button>
						<div className='hamburger'>
							<div className='line top'></div>
							<div className='line center'></div>
							<div className='line bottom'></div>
						</div>
					</div>
				</nav>
			</header>

			<Swiper
				spaceBetween={50}
				slidesPerView={1}
				onSlideChange={() => console.log('slide change')}
				onSwiper={swiper => console.log(swiper)}
				className='banner'
			>
				<SwiperSlide>
					<div className='swiper-slide-content'>
						<h1>
							<span>매일 25분 외국인 선생님과</span> <br />
							<span>화상 영어독서, 리딩타임</span> <br />
						</h1>
						<p>
							<span>하루 한 권, 한달 20권, 일년 240권의 영어책 읽기!</span>{' '}
							<br />
							<span>아이들의 미래를 든든하게 만드는 영어 독서 습관</span> <br />
							<span>＊평일 5일, 한달 평균 20일 기준</span> <br />
						</p>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='swiper-slide-content'>
						<h1>
							<span>매일 25분 외국인 선생님과</span> <br />
							<span>화상 영어독서, 리딩타임</span> <br />
						</h1>
						<p>
							<span>하루 한 권, 한달 20권, 일년 240권의 영어책 읽기!</span>{' '}
							<br />
							<span>아이들의 미래를 든든하게 만드는 영어 독서 습관</span> <br />
							<span>＊평일 5일, 한달 평균 20일 기준</span> <br />
						</p>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='swiper-slide-content'>
						<h1>
							<span>매일 25분 외국인 선생님과</span> <br />
							<span>화상 영어독서, 리딩타임</span> <br />
						</h1>
						<p>
							<span>하루 한 권, 한달 20권, 일년 240권의 영어책 읽기!</span>{' '}
							<br />
							<span>아이들의 미래를 든든하게 만드는 영어 독서 습관</span> <br />
							<span>＊평일 5일, 한달 평균 20일 기준</span> <br />
						</p>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='swiper-slide-content'>
						<h1>
							<span>매일 25분 외국인 선생님과</span> <br />
							<span>화상 영어독서, 리딩타임</span> <br />
						</h1>
						<p>
							<span>하루 한 권, 한달 20권, 일년 240권의 영어책 읽기!</span>{' '}
							<br />
							<span>아이들의 미래를 든든하게 만드는 영어 독서 습관</span> <br />
							<span>＊평일 5일, 한달 평균 20일 기준</span> <br />
						</p>
					</div>
				</SwiperSlide>
			</Swiper>

			<section className='why'>
				<h2>왜 독서일까요?</h2>

				<div className='box-why'>
					<img
						src='http://www.readingtime.today/resources/img/main/why1.png'
						alt='why_image'
					/>
					<p>
						<span>외국어 학습에 있어 책 읽기는 필수입니다.</span> <br />
						<span>
							특히 어린 아이일수록 언어 습득이 빠르기 때문에 영어를 전부 익히지
							않았더라도
						</span>
						<br />
						<span>
							그림을 통해 내용을 유추함으로써 Reading Comprehension Skill을
							향상시킬 수 있습니다.
						</span>
						<br />
						<span>단순 말하기 보다 다양한 표현과 구조를 습득할 수 있는</span>
						<br />
						<span>독서야말로 영어 학습에 있어 최고의 방법 중 하나입니다.</span>
						<br />
						<span className='date'>(Moeller & Meyer, 1995)</span>
					</p>
				</div>
				<div className='box-why'>
					<img
						src='http://www.readingtime.today/resources/img/main/why1.png'
						alt='why_image'
					/>
					<p>
						<span>외국어 학습에 있어 책 읽기는 필수입니다.</span> <br />
						<span>
							특히 어린 아이일수록 언어 습득이 빠르기 때문에 영어를 전부 익히지
							않았더라도
						</span>
						<br />
						<span>
							그림을 통해 내용을 유추함으로써 Reading Comprehension Skill을
							향상시킬 수 있습니다.
						</span>
						<br />
						<span>단순 말하기 보다 다양한 표현과 구조를 습득할 수 있는</span>
						<br />
						<span>독서야말로 영어 학습에 있어 최고의 방법 중 하나입니다.</span>
						<br />
						<span className='date'>(Moeller & Meyer, 1995)</span>
					</p>
				</div>
			</section>

			<div className='videos'>
				<h2>리딩타임 체험후기</h2>
				<p className='cap'>리딩타임의 리얼한 체험후기를 영상으로 만나보세요.</p>
				<Swiper
					slidesPerView={3}
					navigation={true}
					modules={[Pagination, Navigation]}
					className='experiences'
				>
					<SwiperSlide className='video'>
						<div className='thumb'>
							<img
								className='sec-play'
								src='http://www.readingtime.today/resources/img/main/sec1_play.png'
								alt='sec_play'
							/>
							<img
								className='thumb-image'
								src='https://img.youtube.com/vi/ul33Z36fyf0/sddefault.jpg'
								alt='youtube_thumb'
							/>
						</div>
						<div className='cap'>
							“리딩타임을 하면서 아이가 책 읽는 습관을 가지게 되어 정말
							기쁩니다.”
						</div>
						<div className='author'>Reading Time 제레미 아버님</div>
					</SwiperSlide>
					<SwiperSlide className='video'>
						<div className='thumb'>
							<img
								className='sec-play'
								src='http://www.readingtime.today/resources/img/main/sec1_play.png'
								alt='sec_play'
							/>
							<img
								className='thumb-image'
								src='https://img.youtube.com/vi/ul33Z36fyf0/sddefault.jpg'
								alt='youtube_thumb'
							/>
						</div>
						<div className='cap'>
							“리딩타임을 하면서 아이가 책 읽는 습관을 가지게 되어 정말
							기쁩니다.”
						</div>
						<div className='author'>Reading Time 제레미 아버님</div>
					</SwiperSlide>{' '}
					<SwiperSlide className='video'>
						<div className='thumb'>
							<img
								className='sec-play'
								src='http://www.readingtime.today/resources/img/main/sec1_play.png'
								alt='sec_play'
							/>
							<img
								className='thumb-image'
								src='https://img.youtube.com/vi/ul33Z36fyf0/sddefault.jpg'
								alt='youtube_thumb'
							/>
						</div>
						<div className='cap'>
							“리딩타임을 하면서 아이가 책 읽는 습관을 가지게 되어 정말
							기쁩니다.”
						</div>
						<div className='author'>Reading Time 제레미 아버님</div>
					</SwiperSlide>{' '}
					<SwiperSlide className='video'>
						<div className='thumb'>
							<img
								className='sec-play'
								src='http://www.readingtime.today/resources/img/main/sec1_play.png'
								alt='sec_play'
							/>
							<img
								className='thumb-image'
								src='https://img.youtube.com/vi/ul33Z36fyf0/sddefault.jpg'
								alt='youtube_thumb'
							/>
						</div>
						<div className='cap'>
							“리딩타임을 하면서 아이가 책 읽는 습관을 가지게 되어 정말
							기쁩니다.”
						</div>
						<div className='author'>Reading Time 제레미 아버님</div>
					</SwiperSlide>{' '}
					<SwiperSlide className='video'>
						<div className='thumb'>
							<img
								className='sec-play'
								src='http://www.readingtime.today/resources/img/main/sec1_play.png'
								alt='sec_play'
							/>
							<img
								className='thumb-image'
								src='https://img.youtube.com/vi/ul33Z36fyf0/sddefault.jpg'
								alt='youtube_thumb'
							/>
						</div>
						<div className='cap'>
							“리딩타임을 하면서 아이가 책 읽는 습관을 가지게 되어 정말
							기쁩니다.”
						</div>
						<div className='author'>Reading Time 제레미 아버님</div>
					</SwiperSlide>
				</Swiper>
			</div>

			<div className='schedule'>
				<div className='schedule-wrapper'>
					<h2>리딩타임 공지사항</h2>
					<div className='cap'>리딩타임의 다양한 소식을 알려드립니다.</div>

					<div className='flex-box'>
						<div className='notices'>
							<div className='title'>
								<span>NOTICE</span>
								<button>
									MORE
									<AiOutlinePlus />
								</button>
							</div>
							<div className='item'>
								<button>이벤트</button>
								<div className='title'>
									[선착순 100명] 여름방학 영어 독서로 시원한 인생 리프레시! 3+1
									이벤트 (~8/25)
								</div>
								<span className='date'>2023. 07. 21</span>
							</div>
							<div className='item'>
								<button>이벤트</button>
								<div className='title'>
									[선착순 100명] 여름방학 영어 독서로 시원한 인생 리프레시! 3+1
									이벤트 (~8/25)
								</div>
								<span className='date'>2023. 07. 21</span>
							</div>
							<div className='item'>
								<button>이벤트</button>
								<div className='title'>
									[선착순 100명] 여름방학 영어 독서로 시원한 인생 리프레시! 3+1
									이벤트 (~8/25)
								</div>
								<span className='date'>2023. 07. 21</span>
							</div>
							<div className='item'>
								<button>이벤트</button>
								<div className='title'>
									[선착순 100명] 여름방학 영어 독서로 시원한 인생 리프레시! 3+1
									이벤트 (~8/25)
								</div>
								<span className='date'>2023. 07. 21</span>
							</div>
						</div>
						<div className='questions'>
							<div className='faq question'>
								<p>
									<span>FAQ</span>
									<span>자주 묻는 질문</span>
								</p>
								<img
									src='http://www.readingtime.today/resources/img/main/faq_bg.png'
									alt='faq_bg'
								/>
							</div>
							<div className='q-and-a question'>
								<p>
									<span>Q&A</span>
									<span>궁금한 질문을 답변해드립니다.</span>
								</p>
								<img
									src='http://www.readingtime.today/resources/img/main/qna_bg.png'
									alt='qanda'
								/>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className='sales'>
				<h2>리딩타임 이용권</h2>
				<div className='cap'>
					<span>
						리딩타임은 매일 25분, 외국인 선생님 지도로 영어 독서 습관을 만들고,
					</span>
					<br />
					<span>자연스럽게 영어실력까지 쌓을 수 있는 시간입니다.</span>
				</div>

				<Swiper
					pagination={true}
					modules={[Pagination]}
					spaceBetween={50}
					slidesPerView={3}
					onSlideChange={() => console.log('slide change')}
					onSwiper={swiper => console.log(swiper)}
					className='cards'
				>
					<SwiperSlide>
						<div className='card-content'>
							<div className='card-label'>
								<img
									src='http://www.readingtime.today/resources/img/main/label.png'
									alt='label_image'
									className='label-image'
								/>
								<p>
									<span>50%</span> <br />
									<span>OFF</span>
								</p>
							</div>

							<img
								className='card-logo'
								src='http://www.readingtime.today/themes/readingtime/img/header-logo.png'
								alt='readingtime-today-logo'
							/>
							<div className='date'>
								주<span>2</span>일
							</div>
							<div className='old-price'>176원</div>
							<div className='current-price'>88원</div>
							<div className='desc'>(무료체험 3일 포함)</div>
							<button className='button-payment'>신청하기</button>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className='card-content'>
							<div className='card-label'>
								<img
									src='http://www.readingtime.today/resources/img/main/label.png'
									alt='label_image'
									className='label-image'
								/>
								<p>
									<span>50%</span> <br />
									<span>OFF</span>
								</p>
							</div>

							<img
								className='card-logo'
								src='http://www.readingtime.today/themes/readingtime/img/header-logo.png'
								alt='readingtime-today-logo'
							/>
							<div className='date'>
								주<span>2</span>일
							</div>
							<div className='old-price'>176원</div>
							<div className='current-price'>88원</div>
							<div className='desc'>(무료체험 3일 포함)</div>
							<button className='button-payment'>신청하기</button>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className='card-content'>
							<div className='card-label'>
								<img
									src='http://www.readingtime.today/resources/img/main/label.png'
									alt='label_image'
									className='label-image'
								/>
								<p>
									<span>50%</span> <br />
									<span>OFF</span>
								</p>
							</div>

							<img
								className='card-logo'
								src='http://www.readingtime.today/themes/readingtime/img/header-logo.png'
								alt='readingtime-today-logo'
							/>
							<div className='date'>
								주<span>2</span>일
							</div>
							<div className='old-price'>176원</div>
							<div className='current-price'>88원</div>
							<div className='desc'>(무료체험 3일 포함)</div>
							<button className='button-payment'>신청하기</button>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className='card-content'>
							<div className='card-label'>
								<img
									src='http://www.readingtime.today/resources/img/main/label.png'
									alt='label_image'
									className='label-image'
								/>
								<p>
									<span>50%</span> <br />
									<span>OFF</span>
								</p>
							</div>

							<img
								className='card-logo'
								src='http://www.readingtime.today/themes/readingtime/img/header-logo.png'
								alt='readingtime-today-logo'
							/>
							<div className='date'>
								주<span>2</span>일
							</div>
							<div className='old-price'>176원</div>
							<div className='current-price'>88원</div>
							<div className='desc'>(무료체험 3일 포함)</div>
							<button className='button-payment'>신청하기</button>
						</div>
					</SwiperSlide>
				</Swiper>
			</div>

			<div className='daily'>
				<h2>영어독서 습관만들기!</h2>
				<h2 className='bigger'>하루 25분, 리딩타임!</h2>
				<div className='cap'>
					<span>
						리딩타임은 날마다 외국인 선생님의 독서지도로 영어 독서 습관을 만들어
						갑니다.
					</span>
					<br />
					<span>원어민과의 대화가 자연스러워지는 것은 덤!</span>
				</div>

				<div className='circles'>
					<div className='circle'>
						<img
							src='http://www.readingtime.today/resources/img/main/sec4_1.jpg'
							alt='sec'
						/>
						<div className='content'>
							<span>1:1</span> <br />
							<span>외국인 선생님</span> <br />
							<span>코칭</span> <br />
						</div>
					</div>
					<img
						src='http://www.readingtime.today/resources/img/main/plus.png'
						alt='plus'
					/>
					<div className='circle'>
						<img
							src='http://www.readingtime.today/resources/img/main/sec4_2.jpg'
							alt='sec'
						/>
						<div className='content'>
							<span>하루</span> <br />
							<span>25분</span> <br />
						</div>
					</div>
					<img
						src='http://www.readingtime.today/resources/img/main/plus.png'
						alt='plus'
					/>
					<div className='circle'>
						<img
							src='http://www.readingtime.today/resources/img/main/sec4_3.jpg'
							alt='sec'
						/>
						<div className='content'>
							<span>온라인</span> <br />
							<span>도서관</span> <br />
						</div>
					</div>
				</div>

				<a href='#!' className='promo-link'>
					<button className='promo-button'>무료체험 3일 지금 신청하기</button>
				</a>
			</div>

			<footer className='page-footer'>
				<div className='footer-wrapper'>
					<div className='privacy'>
						<div className='list'>
							<span>이용약관 </span>
							<span>개인정보처리방침</span>
							<span>결제 및 환불정책</span>
						</div>
						<a className='go-top' href='#page-header'>
							<span>
								<MdOutlineKeyboardArrowUp />
							</span>
							<span>TOP</span>
						</a>
					</div>
					<div className='address'>
						<img
							src='http://www.readingtime.today/themes/readingtime/img/header-logo.png'
							alt='readingtime-today-logo'
						/>
						<address>
							<p>
								<span>잉글리쉬윙(주)</span>
								<span>사업자 등록번호 :610-86-01417</span>
								<span>대표자 :김은석</span>
							</p>
							<p>
								본사 주소 :서울특별시 강서구 마곡서로 133, 마곡엠밸리 713-1004
							</p>
							<p>통신판매업 신고 :제2018-서울강남-03582호</p>
						</address>
					</div>

					<div className='others'>
						<div className='copyright'>
							Copyright ⓒ 잉글리쉬윙(주). All rights reserved.
						</div>
						<div className='social'>
							{/* <div className='blog'>blog</div> */}
							<div className='facebook'>
								<BiLogoFacebookCircle size={25} />
							</div>
							<div className='instagram'>
								<BiLogoInstagram size={25} />
							</div>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default HomePage;
