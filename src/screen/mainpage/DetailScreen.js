import * as React from 'react';
import {useContext, useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Platform,
  Alert,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import styles from '../mainpage/styles';
import MainActionBar from '../mainpage/MainActionBar';
// import DeviceInfo from 'react-native-device-info';
import AppContext from '../../context/AppContext';
import RadioForm from 'react-native-simple-radio-button';
// import CountdownTimer from 'react-deadline';

export default function DetailScreen({route, navigation}) {
  // const myContext = useContext(AppContext);
  const navigation2 = () => navigation.navigate('InviteAcceptScreen');
  const navigation3 = () => navigation.navigate('Home');
  // const {list, roles, acceptedCount} = route.params;
  const [role, setRole] = useState('');

  const [extra, setExtra] = useState('');

  const onChangeExtra = value => {
    setExtra(value);
  };

  const timeList = [
    {label: 'param1', value: 0},
    {label: 'param2', value: 1},
    {label: 'param3', value: 2},
    {label: 'param4', value: 3},
    {label: 'param5', value: 4},
  ];

  const placeList = [
    {label: 'param1', value: 5},
    {label: 'param2', value: 6},
    {label: 'param3', value: 7},
    {label: 'param4', value: 8},
    {label: 'param5', value: 9},
  ];

  // const padNumber = (num, length) => {
  //   return String(num).padStart(length, '0');
  // };

  // 아무것도 입력하지 않으면 undefined가 들어오기 때문에 유효성 검사부터..
  // const tempDay = 0;
  // const tempHour = 0;
  // const tempMin = 0;
  // const deadline = 0;
  // // 타이머를 초단위로 변환한 initialTime과 setInterval을 저장할 interval ref
  // const initialTime = useRef(tempHour * 60 * 60 + tempMin * 60);
  // const interval = useRef(null);

  // const [hour, setHour] = useState(padNumber(tempHour, 2));
  // const [min, setMin] = useState(padNumber(tempMin, 2));

  // const now = new Date().getTime();
  // const t = deadline - now;

  // useEffect(() => {
  //   interval.current = setInterval(() => {
  //     initialTime.current -= 1;

  //     setMin(padNumber(parseInt(initialTime.current / 60), 2));
  //     setHour(padNumber(parseInt(initialTime.current / 60 / 60), 2));
  //   }, 1000);
  //   return () => clearInterval(interval.current);
  // }, []);

  // // 초가 변할 때만 실행되는 useEffect
  // // initialTime을 검사해서 0이 되면 interval을 멈춘다.
  // useEffect(() => {
  //   if (initialTime.current <= 0) {
  //     clearInterval(interval.current);
  //   }
  // }, []);

  const androidBool = Platform.OS === 'android' ? true : false;
  return (
    <SafeAreaView style={styles.detailSafeViewArea}>
      {androidBool === true ? (
        <StatusBar barStyle="dark-content" hidden={false} translucent={true} />
      ) : (
        <></>
      )}
      <MainActionBar navigation={navigation} title={'DetailScreen'} />

      <View style={{flex: 1, flexDirection: 'column', width: '100%'}}>
        <View style={styles.detailContents}>
          <View style={{flexDirection: 'row', width: '100%'}}>
            <View style={{justifyContent: 'center'}}>
              <Text style={styles.detailHeadText}>◦ 일정 이름 : </Text>
            </View>
            <View style={{justifyContent: 'center'}}>
              {/* <CountdownTimer       
                endsAt={this.props.date}
                onUpdate={timer => this.setState({timer: timer})>
                {`${this.state.timer.hours}:${this.state.timer.minutes}:${this.state.timer.seconds}`}/> */}
              <Text style={styles.detailText}>수빈이랑 밥약</Text>
            </View>
            {/* <View>
            <Text style={styles.mainNeedConfirmMeetOwner}>✔방장</Text>
          </View> */}
          </View>

          <View style={{flexDirection: 'row', width: '100%'}}>
            <View style={{justifyContent: 'center'}}>
              <Text style={styles.detailHeadText}>◦ 온/오프라인 : </Text>
            </View>
            <View style={{justifyContent: 'center'}}>
              <Text style={styles.detailText}>오프라인</Text>
              {/* <Text>
                {hour} : {min}
              </Text> */}
            </View>
          </View>

          <View style={{flexDirection: 'row', width: '100%'}}>
            <View style={{justifyContent: 'center'}}>
              <Text style={styles.detailHeadText}>◦ 일정 소요 시간 : </Text>
            </View>
            <View style={{justifyContent: 'center'}}>
              <Text style={styles.detailText}>3hours 10minute</Text>
            </View>
          </View>

          <View style={{flexDirection: 'row', width: '100%'}}>
            <View style={{justifyContent: 'center'}}>
              <Text style={styles.detailHeadText}>
                ◦ 현재 수락 인원/전체 인원 :
              </Text>
            </View>
            <View style={{justifyContent: 'center'}}>
              <Text style={styles.detailText}>0명/2명</Text>
            </View>
          </View>

          <View style={{flexDirection: 'row', width: '100%'}}>
            <View style={{justifyContent: 'center'}}>
              <Text style={styles.detailHeadText}>◦ 초대장 유효 기간 :</Text>
            </View>
            <View style={{justifyContent: 'center'}}>
              <Text style={styles.detailText}>3시간</Text>
            </View>
          </View>
        </View>

        {{role} !== '방장' ? (
          <View style={styles.pickContents}>
            <Text style={styles.detailTitleText}>
              📢 <Text style={{color: '#F15F5F'}}>방장</Text>만이 시간, 장소
              추천 후보를{'\n'}확인할 수 있습니다.{'\n'}
              <Text style={{fontSize: 13}}>
                (시간, 장소 추천 후보 중{'\n'}하나씩 선택하여 일정을
                확정하세요.)
              </Text>
            </Text>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={styles.pickView}>
                <Text style={styles.detailPick}>➰ 약속 추천 시간</Text>
                <View
                  style={{
                    flex: 0.8,
                    justifyContent: 'center',
                    alignContent: 'center',
                    marginTop: 10,
                  }}>
                  <RadioForm
                    radio_props={timeList}
                    initial={0}
                    formHorizontal={false}
                    buttonColor={'#2196f3'}
                    animation={true}
                    onPress={onChangeExtra}
                    style={{
                      flex: 1,
                      justifyContent: 'center',
                      alignContent: 'center',
                      margin: 20,
                      marginLeft: 125,
                    }}
                  />
                </View>
              </View>
              <Text style={{textAlign: 'center', color: '#8C8C8C'}}>
                {' '}
                --------------------------------------------------------------{' '}
              </Text>
              <View style={styles.pickView}>
                <Text style={styles.detailPick}>➰ 약속 추천 장소</Text>
                <RadioForm
                  radio_props={placeList}
                  initial={5}
                  onPress={onChangeExtra}
                  formHorizontal={false}
                  buttonSize={15}
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignContent: 'center',
                    margin: 20,
                    marginLeft: 125,
                  }}
                />
              </View>
            </ScrollView>
          </View>
        ) : (
          <></>
        )}
      </View>
      <View style={styles.fixToText}>
        <TouchableOpacity
          style={styles.bottomButton}
          onPress={() => navigation3()}>
          <Text>초대 거절하기</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.bottomButton}
          onPress={() => {
            navigation.navigate('InviteAcceptScreen', {
              list: list,
              role: roles,
              acceptedCount: acceptedCount,
            });
          }}>
          {{role} === '방장' ? (
            <Text>일정 확정하기</Text>
          ) : (
            <Text>초대 수락하기</Text>
          )}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
