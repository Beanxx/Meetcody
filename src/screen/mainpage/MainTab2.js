/* eslint-disable prettier/prettier */
import * as React from 'react';
import {useContext} from 'react';
import AppContext from '../../context/AppContext';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import ActionBar from 'react-native-action-bar';
import axios from 'axios';
import styles from './styles';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {DrawerActions} from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';
// import { NetworkInfo } from "react-native-network-info";
import DeviceInfo from 'react-native-device-info';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

export default function MainTab2(props) {
  // eslint-disable-next-line prettier/prettier
  const today = new Date();
  const date = today.getDate();
  const month = (today.getMonth() + 1).toLocaleString();
  const day = today.getDay();
  let days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  // let ip4="";
  // NetworkInfo.getIPV4Address().then(ipv4Address => {
  //   ip4=ipv4Address;
  // });

  let apiaddress = '';
  if (DeviceInfo.isEmulator()) {
    apiaddress = 'http://' + 'localhost' + ':8080/invitation';
  } else {
    apiaddress = 'http://' + '192.168.12.94' + ':8080/invitation';
  }

  return (
    <>
      <View style={styles.mainScreen1ContentView}>
        <Text style={styles.mainScreenHeadline} allowFontScaling={false}>
          확정된
        </Text>

        <Agenda
          items={{
            '2012-05-22': [{name: 'item 1 - any js object'}],
            '2012-05-23': [{name: 'item 2 - any js object', height: 80}],
            '2012-05-24': [],
            '2012-05-25': [
              {name: 'item 3 - any js object'},
              {name: 'any js object'},
            ],
          }}
          // Callback that gets called when items for a certain month should be loaded (month became visible)
          loadItemsForMonth={month => {
            console.log('trigger items loading');
          }}
          // Callback that fires when the calendar is opened or closed
          onCalendarToggled={calendarOpened => {
            console.log(calendarOpened);
          }}
          // Callback that gets called on day press
          onDayPress={day => {
            console.log('day pressed');
          }}
          // Callback that gets called when day changes while scrolling agenda list
          onDayChange={day => {
            console.log('day changed');
          }}
          // Initially selected day
          selected={'2012-05-16'}
          // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
          minDate={'2012-05-10'}
          // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
          maxDate={'2012-05-30'}
          // Max amount of months allowed to scroll to the past. Default = 50
          pastScrollRange={50}
          // Max amount of months allowed to scroll to the future. Default = 50
          futureScrollRange={50}
          // Specify how each item should be rendered in agenda
          renderItem={(item, firstItemInDay) => {
            return <View />;
          }}
          // Specify how each date should be rendered. day can be undefined if the item is not first in that day
          renderDay={(day, item) => {
            return <View />;
          }}
          // Specify how empty date content with no items should be rendered
          renderEmptyDate={() => {
            return <View />;
          }}
          // Specify how agenda knob should look like
          renderKnob={() => {
            return <View />;
          }}
          // Specify what should be rendered instead of ActivityIndicator
          renderEmptyData={() => {
            return <View />;
          }}
          // Specify your item comparison function for increased performance
          rowHasChanged={(r1, r2) => {
            return r1.text !== r2.text;
          }}
          // Hide knob button. Default = false
          hideKnob={true}
          // When `true` and `hideKnob` prop is `false`, the knob will always be visible and the user will be able to drag the knob up and close the calendar. Default = false
          showClosingKnob={false}
          // By default, agenda dates are marked if they have at least one item, but you can override this if needed
          markedDates={{
            '2012-05-16': {selected: true, marked: true},
            '2012-05-17': {marked: true},
            '2012-05-18': {disabled: true},
          }}
          // If disabledByDefault={true} dates flagged as not disabled will be enabled. Default = false
          disabledByDefault={true}
          // If provided, a standard RefreshControl will be added for "Pull to Refresh" functionality. Make sure to also set the refreshing prop correctly
          onRefresh={() => console.log('refreshing...')}
          // Set this true while waiting for new data from a refresh
          refreshing={false}
          // Add a custom RefreshControl component, used to provide pull-to-refresh functionality for the ScrollView
          refreshControl={null}
          // Agenda theme
          theme={{
            // ...calendarTheme,
            agendaDayTextColor: 'yellow',
            agendaDayNumColor: 'green',
            agendaTodayColor: 'red',
            agendaKnobColor: 'blue',
          }}
          // Agenda container style
          style={{backgroundColor: 'black'}}
        />
        <View
          style={{
            margin: 10,
            height: 550,
          }}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text
              style={{
                fontSize: 25,
                textAlign: 'left',
                margin: 10,
                marginLeft: 20,
                // fontWeight: 'bold',
              }}>
              {month}월
            </Text>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                margin: 5,
                display: 'flex',
                justifyContent: 'flex-end',
                alignContent: 'center',
              }}>
              <View>
                <Text
                  style={{
                    marginTop: 20,
                    textAlign: 'center',
                    paddingRight: 10,
                    fontSize: 17,
                    color: '#4374D9',
                  }}>
                  {days[day]}
                </Text>
                <Text
                  style={{
                    textAlign: 'center',
                    paddingRight: 10,
                    fontSize: 28,
                    color: '#4374D9',
                  }}>
                  {date}
                </Text>
              </View>

              <View
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={{flexDirection: 'row'}}>
                <TouchableOpacity activeOpacity={1} style={styles.mainCalendar}>
                  <Text style={[styles.mainConfirmedMeetHead]}>
                    MeetCody Meeting
                  </Text>
                  <Text style={styles.mainConfirmedMeetText}>
                    09:00 A.M. ~ 17:00 P.M. {'\n'}
                    숙명여자대학교 명재관
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                margin: 5,
                display: 'flex',
                justifyContent: 'flex-end',
                alignContent: 'center',
              }}>
              <View>
                <Text
                  style={{
                    marginTop: 20,
                    textAlign: 'center',
                    paddingRight: 10,
                    fontSize: 17,
                  }}>
                  {days[day]}
                </Text>
                <Text
                  style={{
                    textAlign: 'center',
                    paddingRight: 10,
                    fontSize: 28,
                  }}>
                  {date}
                </Text>
              </View>
              <View
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={{flexDirection: 'row'}}>
                <TouchableOpacity activeOpacity={1} style={styles.mainCalendar}>
                  <Text style={[styles.mainConfirmedMeetHead]}>
                    MeetCody Meeting
                  </Text>
                  <Text style={styles.mainConfirmedMeetText}>
                    09:00 A.M. ~ 17:00 P.M. {'\n'}
                    숙명여자대학교 명재관
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </>
  );
}
