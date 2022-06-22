import { Injectable } from "@angular/core";
import {
  Firestore,
  getFirestore,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
  DocumentData,
  CollectionReference,
  onSnapshot,
  QuerySnapshot,
} from "firebase/firestore";
import { FirebaseFirestore } from "angularfire2";
import { initializeApp } from "firebase/app";
import { Subject } from "rxjs";
import { environment } from "src/environments/environment";
import { IdName } from "./IdName.model";

export class BaseFirestoreService<T extends IdName> {
  db: FirebaseFirestore;
  collection: CollectionReference<DocumentData>;
  private updatedSnapshot = new Subject<QuerySnapshot<DocumentData>>();
  obsr_UpdatedSnapshot = this.updatedSnapshot.asObservable();

  constructor(protected collectionName: string) {
    initializeApp(environment.firebase);
    this.db = getFirestore();
    this.collection = collection(this.db, collectionName);

    // Get Realtime Data
    onSnapshot(
      this.collection,
      (snapshot) => {
        this.updatedSnapshot.next(snapshot);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  async get() {
    const snapshot = await getDocs(this.collection);
    return snapshot;
  }

  async add(data: T) {
    await addDoc(this.collection, data);
    return;
  }

  async delete(id: string) {
    const docRef = doc(this.db, this.collectionName, id);
    await deleteDoc(docRef);
    return;
  }

  async update(data: T) {
    const docRef = doc(this.db, this.collectionName, data.id);
    await updateDoc(docRef, <any>data);
    return;
  }
}
