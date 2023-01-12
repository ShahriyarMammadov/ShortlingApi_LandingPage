import React, { useReducer, useState } from 'react'
import { NavLink } from 'react-router-dom'
import './index.scss'
import { Input, Card, Alert, Space, Spin, message } from 'antd';
import axios from 'axios'

const HomePage = () => {
  const [loading, setLoading] = useState(Boolean)

  const arr = JSON.parse(localStorage.getItem('shorted')) ?? []

  const reducer = (state, action) => {
    switch (action.type) {
      case 'COPY':
        return { ...state, copied: action.payload }

      case 'INPUT_VALUE':
        return { ...state, value: action.payload }

      default:
        state;
    }
  }

  const [state, dispatch] = useReducer(reducer, { value: [], copied: '' })

  const onChange = (e) => {
    dispatch({
      type: 'INPUT_VALUE',
      payload: e.target.value
    })
  };

  const handleonClick = async () => {
    if (state.value?.length === 0 || state.value.trim() === '') {
      error()
    } else {
      setLoading(true)
      const Data = await axios.get(`https://api.shrtco.de/v2/shorten?url=${state.value}`)
      setLoading(false)
      arr.push(Data.data.result)
      localStorage.setItem('shorted', JSON.stringify(arr))
    }
  }

  const handleCopy = (e, i) => {
    navigator.clipboard.writeText(e.full_short_link3)
    dispatch({
      type: 'COPY',
      payload: i
    })
  }

  const [messageApi, contextHolder] = message.useMessage();

  const error = () => {
    messageApi.open({
      type: 'error',
      content: 'The value of the input is empty!!!',
    });
  }

  // ----------------------

  return (
    <div className='sections'>
      <section id='section1'>
        <div className="left">
          <h1>More then just shorter links</h1>
          <p>Build your brand’s recognition and get detailed insights on how your links are performing.</p>
          <button><NavLink to={'/545498'}>Get Started</NavLink></button>
        </div>
        <div className="right">
          <div className="backImg"></div>
        </div>
      </section>

      <section id='section2'>
        <div className="images">
          <div className="imgLeft"></div>
          <div className="imgRight"></div>
          <div className="inputs">
            <Input placeholder="Enter the link . . . . ." allowClear onChange={onChange} />
            <button onClick={() => {
              handleonClick()
            }}>Shorten it!</button>
          </div>
        </div>
      </section>

      <section id='section3'>
        {loading ?
          <Space
            direction="vertical"
            style={{
              width: '100%',
            }}
          >
            <Spin tip="Converts...">
              <Alert
                size='large'
                message="Please wait until it becomes a short link"
                description="Further details about the context of this alert."
                type="info"
              />
            </Spin>
          </Space> : (
            <>
              {contextHolder}
              {arr.map((e, i) => {
                return (
                  <div className="urlBoxs" key={i}>
                    <div className="value">
                      <span>{e.original_link}</span>
                    </div>
                    <div className="right">
                      <div className="link">
                        <a href={e.full_short_link3} target='_blank'>{e.full_short_link3}</a>
                      </div>
                      <button onClick={() => handleCopy(e, i)} className={state.copied === i ? 'copiedBtn' : null}>{
                        state.copied === i ? 'Copied!' : 'Copy'
                      }</button>
                    </div>
                  </div>
                )
              })}

            </>
          )

        }
      </section>

      <section id='section4'>
        <div className="header">
          <h1>Advanced Statistics</h1>
          <p>Track how your links are performing across the web with our advanced statistics dashboard.</p>
        </div>
        <div className="hrImg"></div>
        <div className="cards">
          <div className="site-card-border-less-wrapper">
            <Card
              title="Brand Recognition"
              bordered={false}
              style={{
                width: 300,
              }}
            >
              <p>Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.</p>
            </Card>
          </div>
          <div className="site-card-border-less-wrapper">
            <Card
              id='card2'
              title="Detailed Records"
              bordered={false}
              style={{
                width: 300,
              }}
            >
              <p>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
            </Card>
          </div>
          <div className="site-card-border-less-wrapper">
            <Card
              id='card3'
              title="Fully Customizable"
              bordered={false}
              style={{
                width: 300,
              }}
            >
              <p>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage