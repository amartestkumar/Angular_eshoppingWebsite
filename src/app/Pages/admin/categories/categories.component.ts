import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category/category.service';
import { CommonModule } from '@angular/common';
import { Console } from 'console';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent implements OnInit{
  showForm:boolean=false;
  removecategorybtn:boolean=false;
CategoryList:any[]=[];
  categoryobject:any={
    "categoryId":0,
    "categoryName":"",
    "ParentCategoryId":""

  };

constructor (private CategorySRV:CategoryService){

}

  ngOnInit(): void {
    debugger;
      this.CategorySRV.GetAllCategoryValueAPI().subscribe((res:any)=>{
        (res!=null)
        {
          this.CategoryList=res;
          console.log(this.CategoryList);
        }
      })
  }
GetCategoryList()
{
  debugger;
  this.CategorySRV.GetAllCategoryValueAPI().subscribe((result:any)=>{
    if(result!=null)
      {
        this.CategoryList=result;
        console.log(this.CategoryList);
      }
      
  })
}
ShowCategoryForm(){
  this.showForm=true;
}

OnAddcategory()
{
  debugger;
  this.CategorySRV.PostCategoryMethod(this.categoryobject).subscribe((result:any)=>{
    debugger;
    if(result!=null)
      {
        alert("Category Added Succesfully");
        this.GetCategoryList();
        this.showForm=false;
        this.removecategorybtn=false;
      }
  })
}

Onbtnforremovecatform()
{
  this.showForm=false;
  this.removecategorybtn=false;
}
}
